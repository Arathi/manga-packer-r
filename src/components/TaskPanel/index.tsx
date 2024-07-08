import { Button } from "@arco-design/web-react";
import {
  IconDown,
  IconDownload,
  IconSave,
  IconUp,
} from "@arco-design/web-react/icon";
import { zipSync } from "fflate";
import { saveAs } from "file-saver";
import { CSSProperties, ReactNode, useEffect, useMemo, useState } from "react";

import AdapterFactory from "@/adapters/AdapterFactory";
import Task, { TaskPatch, TaskStatus } from "@/domains/Task";
import TaskResult from "@/domains/TaskResult";
import DownloaderFactory from "@/downloaders/DownloaderFactory";
import { version } from "@pkg";

import TaskView from "./TaskView";
import TaskList from "./TaskList";
import Flex from "@/components/Flex";
import TaskProgress from "@/components/Progress";

import "./index.less";

const adapter = AdapterFactory.create();
const downloader = DownloaderFactory.getInstance();

const files: Record<string, Uint8Array> = {};

type Props = {
  style?: CSSProperties;
};

const DefaultStyle: CSSProperties = {
  position: "fixed",
  right: 10,
  top: 10,
  width: 400,
  backgroundColor: "white",
  borderColor: "gray",
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: 8,
  boxShadow: "1px 1px 3px gray",
  opacity: 0.9,
  padding: 12,
};

enum Step {
  Pending = 0,
  Fetch = 1,
  Download = 2,
  Pack = 3,
  Save = 4,
  Done = 5,
}

/**
 * 任务面板
 */
const TaskPanel: React.FC<Props> = ({ style }) => {
  const [step, setStep] = useState<Step>(Step.Pending);
  const [title, setTitle] = useState("");
  const [taskAmount, setTaskAmount] = useState(0);
  const [taskMap, setTaskMap] = useState<Record<string, Task | undefined>>({});
  const [minimized, setMinimized] = useState(false);

  // const taskIds = useMemo<string[]>(() => {
  //   const ids: string[] = [];
  //   for (let id in taskMap) {
  //     ids.push(id);
  //   }
  //   return ids;
  // }, [taskMap]);

  const tasks = useMemo<Task[]>(() => {
    const list: Task[] = [];
    for (let id in taskMap) {
      const task = taskMap[id];
      if (task !== undefined) {
        list.push(task);
      }
    }
    return list;
  }, [taskMap]);

  // const totalProgress = useMemo<number>(() => {
  //   if (tasks.length <= 0) {
  //     return 0;
  //   }
  //   let doneCounter = 0;
  //   tasks.forEach((t) => {
  //     if (t.status === TaskStatus.Done) {
  //       doneCounter++;
  //     }
  //   });
  //   return (doneCounter * 100) / tasks.length;
  // }, [tasks]);

  async function fetchGallery() {
    const gallery = await adapter.fetchGallery();
    setTitle(gallery.title);
    setTaskAmount(gallery.pageAmount);
    adapter.fetchTasks(gallery.id, addTask);
  }

  function addTask(task: Task) {
    taskMap[task.id] = task;
    setTaskMap({
      ...taskMap,
    });
  }

  function sortTasks() {}

  function patchTask(patch: TaskPatch) {
    // const index = tasks.findIndex((t) => t.id === patch.id);
    // if (index >= 0) {
    //   tasks[index] = {
    //     ...tasks[index],
    //     ...patch,
    //   };
    //   setTasks([...tasks]);
    // }
    const task = taskMap[patch.id];
    if (task !== undefined) {
      taskMap[patch.id] = {
        ...task,
        ...patch,
      };
      setTaskMap({ ...taskMap });
    }
  }

  function downloadAll() {
    for (const id in tasks) {
      const task = tasks[id];
      if (task !== undefined) {
        download(task);
      }
    }
  }

  function download(task: Task) {
    downloader
      .download(task, onProgress)
      .then(onComplete)
      .catch((reason) => {
        console.info(`${task.id}下载失败：`, reason);
        patchTask({
          id: task.id,
          status: TaskStatus.Error,
          completed: 0,
        });
      });
  }

  function onProgress(id: string, completed: number, total: number) {
    console.info(`任务${id}下载进度更新：${completed} / ${total}`);
    const status = TaskStatus.Running;
    patchTask({
      id,
      status,
      completed,
      total,
    });
  }

  function onComplete(result: TaskResult) {
    const { id, fileName, mime, bytes } = result;
    console.info(
      `${id}下载完成，文件类型：${mime}，缓存长度：${bytes?.length ?? 0}`
    );
    const status = TaskStatus.Done;
    patchTask({
      id,
      status,
    });

    if (fileName !== undefined && bytes !== undefined) {
      files[fileName] = bytes;
    }
  }

  function pack() {
    const zipBytes = zipSync(files, { level: 0 });
    console.info(`压缩后字节数：${zipBytes.length}`);
    const zipBlob = new Blob([zipBytes], {
      type: "application/zip",
    });
    console.info(`创建Blob：`, zipBlob);
    saveAs(zipBlob, `${title}.zip`);
  }

  function sizeToggle() {
    setMinimized(!minimized);
  }

  useEffect(() => {
    setStep(Step.Fetch);
    fetchGallery();
  }, []);

  let taskList: ReactNode = null;
  if (!minimized) {
    taskList = <TaskList tasks={tasks} onDownload={download} />;
  }

  return (
    <Flex
      className={"task-panel"}
      gap={8}
      direction="column"
      style={{
        ...DefaultStyle,
        ...style,
      }}
    >
      <Flex justify="start" gap={12}>
        <Button
          type="primary"
          size={"small"}
          icon={<IconDownload />}
          onClick={downloadAll}
        />
        <Button
          type="primary"
          size={"small"}
          icon={<IconSave />}
          disabled={
            tasks.length > 0 && tasks.length !== Object.keys(files).length
          }
          onClick={pack}
        />
        <Flex flex={1} justify="end" align="center" gap={12}>
          <span className="plugin-version">v{version}</span>
          <Button
            size={"small"}
            icon={minimized ? <IconDown /> : <IconUp />}
            onClick={sizeToggle}
          />
        </Flex>
      </Flex>

      <Flex align={"center"}>
        <Flex>
          <span className={"total-progress"}>下载进度：</span>
        </Flex>
        <TaskProgress
          success={tasks.filter((t) => t.status === TaskStatus.Done).length}
          running={tasks.filter((t) => t.status === TaskStatus.Running).length}
          error={tasks.filter((t) => t.status === TaskStatus.Error).length}
          pending={tasks.filter((t) => t.status === TaskStatus.Pending).length}
        />
      </Flex>

      {taskList}
    </Flex>
  );
};

export default TaskPanel;
export { TaskView, TaskList };
