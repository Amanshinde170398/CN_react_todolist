import { API_URLS } from "../utils/constant";

const customFetch = async (url, { body, ...customConfig }) => {
  const header = {
    "Content-type": "application/json",
    accept: "application/json",
  };

  const config = {
    ...customConfig,
    header: {
      ...header,
      ...customConfig.header,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    return {
      data,
      success: true,
    };
  } catch (err) {
    console.log(err);
    return { success: false, message: err.message };
  }
};

// GET list of todos
export const fetchTodos = () => {
  return customFetch(API_URLS.fetchTodoList(), { method: "GET" });
};
