const TaskFilter = ({}) => {
  return (
    <div className="task-filter">
      <label className='arc-checkbox'><input type='checkbox' />等待</label>
      <label className='arc-checkbox'><input type='checkbox' />下载</label>
      <label className='arc-checkbox'><input type='checkbox' />错误</label>
      <label className='arc-checkbox'><input type='checkbox' />完成</label>
    </div>
  );
};

export default TaskFilter;
