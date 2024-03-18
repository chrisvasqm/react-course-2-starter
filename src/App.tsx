import { useReducer } from 'react';
import './App.css';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import TaskContext from './state-management/contexts/taskContext';
import taskReducer from './state-management/reducer/taskReducer';

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return <>
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TaskContext.Provider>
  </>
}

export default App;
