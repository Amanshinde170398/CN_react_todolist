const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

export const API_URLS = {
  fetchTodoList: () => {
    return `${API_ENDPOINT}/todos`;
  },
  addTodoItem: () => {
    return `${API_ENDPOINT}/posts`;
  },
  updateTodoItem: (id) => {
    return `${API_ENDPOINT}/posts/${id}`;
  },
  deletTodoItem: (id) => {
    return `${API_ENDPOINT}/posts/${id}`;
  },
};
