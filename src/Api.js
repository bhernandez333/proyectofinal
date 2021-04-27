import axios from "axios";

axios.defaults.headers.common["Token"] = "123456789";
const API_URL = axios.create({
  baseURL: `http://localhost:3000/`
});

export function getTodos() {
  return API_URL.get(`/contacts`, {}); // Config en el segundo param
}

export function deleteTodos(id) {
  return API_URL.delete(`/contacts/${id}`, {}); // Config en el segundo param
}

export function saveTodo(todo) {
  console.log("Todo: " + todo);
  console.log(todo);
  return API_URL.post(`/contacts`, { todo }); // Instancia en el segundo param
}

export function putTodo(todo) {
  return API_URL.put(`/contacts`, { todo }); // Instancia en el segundo param
}
