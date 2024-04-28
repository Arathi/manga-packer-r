import {
  DownloadOutlined, 
  FileZipOutlined, 
  RedoOutlined, 
  SettingOutlined 
} from "@ant-design/icons";
import { Button, Empty, Flex, Progress, Segmented } from "antd";
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
  taskStatusAtom,
  totalProgressAtom,
  patchTaskAtom,
  taskAmountsAtom,
  titleAtom,
} from "@/stores/TaskPanelStore";
import useWindowSize from "@/utils/hooks/useWindowSize";

import TaskView from './TaskView';

import './index.scss';

const adapter = AdapterFactory.create();
const downloader = DownloaderFactory.getInstance();

const gallery = await adapter.fetchGallery();
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
  const windowSize = useWindowSize();
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [taskStatus, setTaskStatus] = useAtom(taskStatusAtom);
  const totalProgress = useAtomValue(totalProgressAtom);
  const taskAmounts = useAtomValue(taskAmountsAtom);
  const patchTask = useSetAtom(patchTaskAtom);
  const [title, setTitle] = useAtom(titleAtom);

  const mergedStyle = {
    ...DefaultStyle,
    ...style,
  }

  function fetchTasks() {
    const { title, tasks } = gallery;
    setTitle(title);
    setTasks(tasks);
  }

  function downloadAll() {
    tasks.forEach(task => download(task));
  }

  function download(task: Task) {
    downloader.download(task, onProgress).then(onComplete);
  }

  function onProgress(id: TaskID, completed: number, total: number) {
    console.info(`任务${id}下载进度更新：${completed} / ${total}`);
    patchTask({
      id,
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

  function setting() {
    //
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  let taskViews: React.ReactNode[] = [];
  taskViews = tasks.map(task => <TaskView
    key={`${task.id}`}
    fileName={task.fileName}
    status={task.status}
    completed={task.completed}
    total={task.total}
    onDownload={() => download(task)}
  />);

  const taskStatusOptions = [{
    label: `所有(${taskAmounts[TaskStatus.All]})`,
    value: TaskStatus.All,
  }, {
    label: `等待(${taskAmounts[TaskStatus.Pending]})`,
    value: TaskStatus.Pending,
  }, {
    label: `下载(${taskAmounts[TaskStatus.Running]})`,
    value: TaskStatus.Running,
  }, {
    label: `错误(${taskAmounts[TaskStatus.Error]})`,
    value: TaskStatus.Error,
  }, {
    label: `完成(${taskAmounts[TaskStatus.Done]})`,
    value: TaskStatus.Done,
  }];

  if (taskStatus !== TaskStatus.All) {
    const amount = tasks.map(
      t => t.status === taskStatus ? 1 : 0
    ).reduce<number>(
      (prev, current) => prev+current, 0
    );
    if (amount === 0) {
      taskViews.push(<Empty key={gallery.id} description="未获取任务" />);
    }
  }

  return (
    <Flex
      className={'task-panel'}
      gap={8} 
      vertical 
      style={mergedStyle}
    >
      <Flex justify="start" gap={16}>
        <Button 
          size={'small'} 
          icon={<RedoOutlined />} 
          disabled={tasks.length > 0}
          onClick={fetchTasks} 
        />
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
        <Button 
          size={'small'} 
          icon={<SettingOutlined />}
          onClick={setting} 
        />
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

      <Segmented
        options={taskStatusOptions}
        value={taskStatus}
        onChange={(value) => {
          console.info(`选择任务状态: ${value}`);
          setTaskStatus(value);
        }}
      />

      <Flex 
        className='task-list' 
        vertical
        gap={3}
        style={{
          height: windowSize.height - 150,
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
      >
        { taskViews }
      </Flex>
    </Flex>
  )
};

export default TaskPanel;
export {
  TaskView,
};
