import { ReactNode, useReducer } from "react";
import TaskContext from "./taskContext";

import { Task } from "./TaskList"

interface AddTask {
    type: 'ADD'
    task: Task
}

interface DeleteTask {
    type: 'DELETE'
    id: number
}

interface ClearTask {
    type: 'CLEAR'
}

export type TaskAction = AddTask | DeleteTask | ClearTask;

const taskReducer = (tasks: Task[], action: TaskAction) => {
    if (action.type === 'ADD')
        return [action.task, ...tasks];

    if (action.type === 'DELETE')
        return tasks.filter(task => task.id !== action.id);

    if (action.type === 'CLEAR')
        return [];

    return tasks;
}

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