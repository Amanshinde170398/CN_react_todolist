import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../contexts/taskContext";
import { fetchTodos } from "../apis";

export const useTask = () => useContext(TaskContext);

export const useProviderTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch tasks APIs
  const fetchTask = async () => {
    const todos = await fetchTodos();
    setTasks(todos.data);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return {
    tasks,
    setTasks,
    loading,
    setLoading,
  };
};
