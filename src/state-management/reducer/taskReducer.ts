import { Task } from "../TaskList"

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

type TaskAction = AddTask | DeleteTask | ClearTask;

export default (tasks: Task[], action: TaskAction) => {
    if (action.type === 'ADD')
        return [action.task, ...tasks];

    if (action.type === 'DELETE')
        return tasks.filter(task => task.id !== action.id);

    if (action.type === 'CLEAR')
        return [];

    return tasks;
}