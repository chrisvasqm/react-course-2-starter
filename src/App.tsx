import './App.css';
import NavBar from './state-management/NavBar';
import { AuthProvider } from './state-management/auth';
import { TaskProvider, TaskList } from './state-management/tasks';

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
