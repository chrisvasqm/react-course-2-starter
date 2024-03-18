import { useContext, useReducer } from 'react';
import TaskContext from './contexts/taskContext';

export interface Task {
  id: number;
  title: string;
}

const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  return (
    <>
      <button
        onClick={() => dispatch({ type: 'ADD', task: { id: Date.now(), title: 'Task ' + Date.now() } })}
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <button
        onClick={() => dispatch({ type: 'CLEAR' })}
        className="btn btn-primary my-3 ms-2"
      >Clear</button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: 'DELETE', id: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
