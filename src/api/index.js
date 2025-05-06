import axios from "axios";
import { API_URL } from "../contants";

export function getTodos() {
  return axios.get(API_URL);
}

export function deleteTodos(id) {
  return axios.delete(API_URL + id);
}

export function createTodos(body) {
  return axios.post(API_URL, body);
}

export function editTodos(body, id) {
  return axios.patch(API_URL + id, body);
}
