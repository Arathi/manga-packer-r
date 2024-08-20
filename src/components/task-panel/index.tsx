import { HTMLAttributes, useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { GM_xmlhttpRequest, unsafeWindow } from "$";
import { zipSync } from "fflate";
import { saveAs } from "file-saver";

import { Adapter, TelegraphAdapter, NHentaiNetAdapter } from "@/adapters";
import Button from "@/components/button";
import Flex from "@/components/flex";
import { IconDown, IconDownload, IconSave, IconUp } from "@/components/icon";
import ProgressBar from "@/components/progress-bar";
import Task, { TaskStatus } from "@/domains/task";
import useWindowSize from "@/hooks/use-window-size";
import store from "@/store";
import TaskList from "./task-list";
import TaskFilter from "./task-filter";

import "./index.less";

const files: Record<string, Uint8Array> = {};

interface Props extends HTMLAttributes<HTMLDivElement> {
  margin?: number;
  padding?: number;
  border?: number;
}

const TaskPanel: React.FC<Props> = (props) => {
  const windowSize = useWindowSize();
  const { margin = 8, padding = 8, border = 1 } = props;
  const panelHeight = windowSize.height - 2 * (margin + padding + border);
  const [minimized, setMinimized] = useState(false);
  const snap = useSnapshot(store);

  const tasks: Task[] = [];
  if (snap.gallery !== undefined) {
    for (const key in snap.gallery.tasks) {
      const task = snap.gallery.tasks[key];
      if (task !== undefined) {
        tasks.push(task);
      }
    }
  }

  const statusList: TaskStatus[] = [];
  const filteredTasks: Task[] = [];
  for (const task of tasks) {
    const taskStatus = task.status ?? TaskStatus.Pending;
    statusList.push(taskStatus);
    if (snap.status === undefined || snap.status === taskStatus) {
      filteredTasks.push(task);
    }
  }

  const sizeToggleIcon = minimized ? <IconDown /> : <IconUp />;

  function onDownloadAllClick() {
    console.debug(`点击下载按钮`);
    for (const task of tasks) {
      if (task.status !== TaskStatus.Success) {
        download(task);
      }
    }
  }

  function onSaveClick() {
    console.debug(`点击保存按钮`);
    if (snap.gallery !== undefined) {
      const zipBytes = zipSync(files);
      const zipBlob = new Blob([zipBytes], {
        type: "application/zip",
      });
      const zipName = `${snap.gallery.name}.zip`;
      saveAs(zipBlob, zipName);
    }
  }

  function onToggleClick() {
    console.debug(`切换 minimized = ${!minimized}`);
    setMinimized(!minimized);
  }

  function onTaskFilterChange(status: TaskStatus | undefined) {
    store.status = status;
  }

  function download(task: Task) {
    console.debug(`任务 ${task.id} 开始下载：`, task.url);
    GM_xmlhttpRequest({
      method: "GET",
      url: task.url,
      responseType: "blob",
      onprogress: (event) => {
        console.info(
          `任务 ${task.id} 下载进度更新：${event.loaded} / ${event.total}`
        );
        updateTask({
          id: task.id,
          status: TaskStatus.Running,
          loaded: event.loaded,
          total: event.total,
        });
      },
      onload: async (event) => {
        const blob = event.response;
        console.info(
          `任务 ${task.id} 下载完成，状态码：${event.status}（${event.statusText}），长度：${blob.size}`
        );
        if (event.status === 200) {
          updateTask({
            id: task.id,
            status: TaskStatus.Success,
            loaded: blob.size,
            total: blob.size,
          });
          const buffer = await blob.arrayBuffer();
          files[task.fileName] = new Uint8Array(buffer);
        } else {
          updateTask({
            id: task.id,
            status: TaskStatus.Error,
          });
        }
      },
      onerror: (event) => {
        console.error(`任务 ${task.id} 下载失败：`, event);
        updateTask({
          id: task.id,
          status: TaskStatus.Error,
        });
      },
    });
  }

  function updateTask(patch: Partial<Task>) {
    if (store.gallery !== undefined && patch.id !== undefined) {
      const id = patch.id;
      const task = store.gallery.tasks[id];
      if (task !== undefined) {
        store.gallery.tasks[id] = {
          ...task,
          ...patch,
        };
      }
    }
  }

  async function init() {
    if (snap.gallery === undefined) {
      console.info("当前站点：", unsafeWindow.location.host);
      let adapter: Adapter | undefined = undefined;
      switch (unsafeWindow.location.host) {
        case "telegra.ph":
          adapter = new TelegraphAdapter();
          break;
        case "nhentai.net":
          adapter = new NHentaiNetAdapter();
          break;
      }

      if (adapter !== undefined) {
        console.info(`正在生成gallery`);
        const gallery = await adapter.generateGallery();
        store.gallery = gallery;
      }
    }
  }

  useEffect(() => {
    init();
  }, []);

  const hidable = minimized ? null : (
    <>
      <TaskFilter status={snap.status} onChange={onTaskFilterChange} />
      <TaskList
        tasks={filteredTasks}
        style={{
          // backgroundColor: "#cccccc",
          height: panelHeight - 99,
        }}
      />
    </>
  );

  return (
    <Flex
      className="task-panel"
      direction="column"
      gap={8}
      style={{
        top: margin,
        right: margin,
        padding,
        borderWidth: border,
        height: minimized ? undefined : panelHeight,
      }}
    >
      <Flex className="buttons-row">
        <Flex className="buttons-left" justify="start" gap={8}>
          <Button className="btn-download" onClick={onDownloadAllClick}>
            <IconDownload />
          </Button>
          <Button className="btn-save" onClick={onSaveClick}>
            <IconSave />
          </Button>
        </Flex>
        <Flex className="buttons-right" flex={1} justify="end" gap={8}>
          <Button className="btn-toggle" onClick={onToggleClick}>
            {sizeToggleIcon}
          </Button>
        </Flex>
      </Flex>
      <Flex className="total-progress-row" align="center" gap={8}>
        <ProgressBar flex={1} statusList={statusList} />
      </Flex>
      {hidable}
    </Flex>
  );
};

export default TaskPanel;