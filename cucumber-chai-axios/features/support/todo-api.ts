import axios from 'axios';

const apiUrl = "https://todo-backend-spring4-java8.herokuapp.com/todos";

export interface TodoItem {
    id?: number;
    title: string;
    completed?: boolean;
    order?: number;
    url?: string;
}

export const addItem = async (item: string): Promise<TodoItem> => {
    let todoItem: TodoItem = {
        title: item,
    }

    return await axios.post(`${apiUrl}`, todoItem);
};

export const delItem = async (itemId: number): Promise<TodoItem> => {
    return await axios.delete(`${apiUrl}/${itemId}`);
};

export const getList = async (): Promise<TodoItem[]> => {
    return await (await axios.get(`${apiUrl}`, { responseType: 'json' })).data;
};

export const cleanList = async (): Promise<void> => {
    const res: TodoItem[] = await getList();

    for (let item of res) {
        if (item.id) await delItem(item.id);
    }
};

