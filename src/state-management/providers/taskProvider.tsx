import { ReactNode, useReducer } from "react";
import taskReducer from "../reducer/taskReducer";
import TaskContext from "../contexts/taskContext";

interface Props {
    children: ReactNode
}

const TaskProvider = ({ children }: Props) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return <TaskContext.Provider value={{ tasks, dispatch }}>
        {children}
    </TaskContext.Provider>
}

export default TaskProvider;