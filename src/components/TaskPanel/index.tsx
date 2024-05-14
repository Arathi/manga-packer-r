import {
  BorderOutlined,
  DownloadOutlined,
  FileZipOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Button, Flex, Progress } from "antd";
import { zipSync } from 'fflate';
import { saveAs } from "file-saver";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { CSSProperties, useEffect } from "react";

import AdapterFactory from "@/adapters/AdapterFactory";
import Task, { TaskID, TaskStatus } from "@/domains/Task";
import TaskResult from "@/domains/TaskResult";
import DownloaderFactory from "@/downloaders/DownloaderFactory";
import {
  tasksAtom,
  totalProgressAtom,
  patchTaskAtom,
  titleAtom,
  minimizedAtom,
} from "@/stores";
import { version } from '@/../package.json';

import TaskView from './TaskView';
import TaskList from './TaskList';

import './index.scss';

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

/**
 * 任务面板
 */
const TaskPanel: React.FC<Props> = ({
  style = DefaultStyle,
}) => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const totalProgress = useAtomValue(totalProgressAtom);
  const patchTask = useSetAtom(patchTaskAtom);
  const [title, setTitle] = useAtom(titleAtom);
  const [minimized, setMinimized] = useAtom(minimizedAtom);

  const mergedStyle = {
    ...DefaultStyle,
    ...style,
  }

  async function fetchTasks() {
    const gallery = await adapter.fetchGallery();
    const { title, tasks } = gallery;
    setTitle(title);
    setTasks(tasks);
  }

  function downloadAll() {
    tasks.forEach(task => download(task));
  }

  function download(task: Task) {
    downloader.download(task, onProgress).then(onComplete).catch(reason => {
      console.info(`${task.id}下载失败：`, reason);
      patchTask({
        id: task.id,
        status: TaskStatus.Error,
        completed: 0,
      });
    });
  }

  function onProgress(id: TaskID, completed: number, total: number) {
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
    const {id, fileName, mime, bytes} = result;
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
      type: 'application/zip',
    });
    console.info(`创建Blob：`, zipBlob);
    saveAs(zipBlob, `${title}.zip`);
  }

  function sizeToggle() {
    setMinimized(!minimized);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Flex
      className={'task-panel'}
      gap={8} 
      vertical 
      style={mergedStyle}
    >
      <Flex justify="start" gap={12}>
        <Button 
          size={'small'}
          icon={<DownloadOutlined />}
          onClick={downloadAll} 
        />
        <Button
          size={'small'}
          icon={<FileZipOutlined />}
          disabled={
            tasks.length > 0 && tasks.length !== Object.keys(files).length
          }
          onClick={pack}
        />
        <Flex flex={1} justify="end" align="center" gap={12}>
          <span className="plugin-version">v{version}</span>
          <Button
            size={'small'}
            icon={ minimized ? <BorderOutlined /> : <MinusOutlined />}
            onClick={sizeToggle}
          />
        </Flex>
      </Flex>

      <Flex align={'center'}>
        <Flex><span className={'total-progress'}>总下载进度：</span></Flex>
        <Flex flex={1}>
          <Progress
            percent={totalProgress}
            format={(percent) => `${percent?.toFixed(0) ?? '0'}%`}
          />
        </Flex>
      </Flex>

      <TaskList tasks={tasks} onDownload={download} />
    </Flex>
  )
};

export default TaskPanel;
export {
  TaskView,
  TaskList,
};
