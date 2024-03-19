import './App.css';
import NavBar from './state-management/NavBar';
import TaskList from './state-management/TaskList';
import AuthProvider from './state-management/providers/authProvider';
import TaskProvider from './state-management/providers/taskProvider';

function App() {

  return <>
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <TaskList />
      </TaskProvider>
    </AuthProvider >
  </>
}

export default App;
