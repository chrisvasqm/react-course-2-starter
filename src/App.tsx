import './App.css';
import NavBar from './state-management/NavBar';
import Counter from './state-management/counter/Counter';
import { TaskProvider, TaskList } from './state-management/tasks';

function App() {

  return <>
    <TaskProvider>
      <Counter />
      <NavBar />
      <TaskList />
    </TaskProvider>
  </>
}

export default App;
