import { useReducer } from 'react';
import './App.css';
import NavBar from './state-management/NavBar';
import TaskList from './state-management/TaskList';
import TaskContext from './state-management/contexts/taskContext';
import taskReducer from './state-management/reducer/taskReducer';
import AuthProvider from './state-management/providers/authProvider';

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return <>
    <AuthProvider>
      <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <TaskList />
      </TaskContext.Provider>
    </AuthProvider>
  </>
}

export default App;
