import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = () => {
        return instance
            .get<T[]>(this.endpoint)
            .then(response => response.data);
    }

    post = (data: T) => {
        return instance
            .post<T>(this.endpoint)
            .then(response => response.data);
    }
}

export default APIClient;