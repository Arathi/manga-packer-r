import ProgressBar, { ProgressBarStatus } from './components/commons/ProgressBar';
import TaskFilter from './components/task/TaskFilter';
import TaskList from './components/task/TaskList';
import './styles/MangaPacker.scss';

export default function App() {
  return (
    <div className="manga-packer-app">
      <div className="arc-row buttons">
        <button className="mgpk-button">下载</button>
        <button className="mgpk-button">打包</button>
        <button className="mgpk-button">设置</button>
      </div>
      <div className="arc-row overall">
        <ProgressBar />
      </div>
      <div className="arc-row filter">
        <TaskFilter />
      </div>
      <div className="arc-row tasks">
        <TaskList />
      </div>
    </div>
  );
}
