import React, { Dispatch } from "react";
import { TaskAction } from "../reducer/taskReducer";
import { Task } from "../TaskList";

interface TaskContextType {
    tasks: Task[],
    dispatch: Dispatch<TaskAction>
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);

export default TaskContext;