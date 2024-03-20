import './App.css';
import NavBar from './state-management/NavBar';
import { AuthProvider } from './state-management/auth';
import Counter from './state-management/counter/Counter';
import { TaskProvider, TaskList } from './state-management/tasks';

function App() {

  return <>
    <AuthProvider>
      <TaskProvider>
        <Counter />
        <NavBar />
        <TaskList />
      </TaskProvider>
    </AuthProvider >
  </>
}

export default App;
