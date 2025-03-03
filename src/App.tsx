import { useEffect, useMemo, useState } from 'react';
import { useSnapshot } from 'valtio';

import * as AdapterFactory from "./adapters/adapter-factory";
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import useWindowSize from './hooks/window-size';
import store from './store';

import './App.less';
import ProgressBar from './components/ProgressBar';

function App() {
  const windowSize = useWindowSize();
  const [site, setSite] = useState<string>();
  const snap = useSnapshot(store);
  
  useEffect(() => {
    if (site === undefined) {
      return;
    }
    const adapter = AdapterFactory.create(site);
    adapter.generateTasks();
  }, [site]);

  useEffect(() => {
    console.warn("窗口大小发生变化：", windowSize);
  }, [windowSize]);

  useEffect(() => {
    async function init() {
      const host = location.host;
      console.info("host = ", host);
      switch (host) {
        case "telegra.ph":
          setSite('telegraph');
          break;
        default:
          setSite(host);
          break;
      }
    }
    init();
  }, []);

  const taskListHeight = useMemo(
    () => windowSize.height - 150,
    [windowSize],
  );

  const totalItems = snap.taskList.map((task) => task.status);

  return (
    <>
      <div className="mgpk-app">
        <div className="mgpk-app-header">
          <div className="mgpk-app-buttons">
            <button
              type='button'
              onClick={() => {}}
            >
              下载
            </button>
            <button
              type='button'
              onClick={() => {}}
            >
              打包
            </button>
          </div>
          <span className="version">v1.8.0-dev</span>
        </div>
        <ProgressBar items={totalItems} />
        <TaskFilter
          onChange={(value) => {
            store.filter = value;
          }}
        />
        <TaskList tasks={store.filtered} height={taskListHeight} />
      </div>
    </>
  );
}

export default App;
