import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

const useTodos = () => {
    return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: () => axios
            .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.data)
    })
}

export default useTodos;