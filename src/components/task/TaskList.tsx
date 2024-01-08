import TaskInfo from "./TaskInfo";
import Task, { TaskStatus } from '../../domains/Task';

const TaskList = ({}) => {
  const tasks: Task[] = [
    {
      id: 'tg-1234-01',
      mangaId: 'tg-1234',
      fileName: '01.png',
      url: 'http://localtest.me/1.png',
      status: TaskStatus.Pending,
    },
    {
      id: 'tg-1234-02',
      mangaId: 'tg-1234',
      fileName: '02.png',
      url: 'http://localtest.me/2.png',
      status: TaskStatus.Pending,
    },
    {
      id: 'tg-1234-03',
      mangaId: 'tg-1234',
      fileName: '03.png',
      url: 'http://localtest.me/2.png',
      status: TaskStatus.Pending,
    },
    {
      id: 'tg-1234-04',
      mangaId: 'tg-1234',
      fileName: '04.png',
      url: 'http://localtest.me/2.png',
      status: TaskStatus.Pending,
    },
    {
      id: 'tg-1234-05',
      mangaId: 'tg-1234',
      fileName: '05.png',
      url: 'http://localtest.me/2.png',
      status: TaskStatus.Pending,
    },
    {
      id: 'tg-1234-06',
      mangaId: 'tg-1234',
      fileName: '06.png',
      url: 'http://localtest.me/2.png',
      status: TaskStatus.Pending,
    }
  ];

  const taskInfos = tasks.filter((task) => {
    return true;
  }).map((task) => {
    return <TaskInfo
      task={task}
    />;
  });

  return (
    <div className="task-list">
      {taskInfos}
    </div>
  );
};

export default TaskList;
