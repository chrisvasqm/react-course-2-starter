import { useReducer } from 'react';
import './App.css';
import NavBar from './state-management/NavBar';
import TaskList from './state-management/TaskList';
import AuthContext from './state-management/contexts/authContext';
import TaskContext from './state-management/contexts/taskContext';
import authReducer from './state-management/reducer/authReducer';
import taskReducer from './state-management/reducer/taskReducer';

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, '');

  return <>
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <TaskList />
      </TaskContext.Provider>
    </AuthContext.Provider>
  </>
}

export default App;
