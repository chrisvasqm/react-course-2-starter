import { useContext } from "react";
import TaskContext from "../contexts/taskContext";

const useTasks = () => useContext(TaskContext);

export default useTasks;