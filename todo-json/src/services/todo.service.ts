import axios from "axios";
import { TodoItem } from "../assets/interfaces";

const mockUrl = "https://6462428e4dca1a661341b775.mockapi.io/api/Task/";

export function getTasks() {
    return axios.get(mockUrl);
}

export function getTask(id:number) {
    return axios.get(mockUrl + id);
}

export function addTask(item:TodoItem) {
    return axios.post(mockUrl, item);
}

export function deleteTask(itemId:number) {
    return axios.delete(mockUrl + itemId);
}

export function updateTask(item:TodoItem) {
    return axios.post(mockUrl + item.id, item);
}
