import { createContext } from "react";
import { useProviderTask } from "../hooks/task";

const initState = {
  tasks: [],
  setTasks: () => {},
  addTask: () => {},
  updateTask: () => {},
  removeTask: () => {},
  loading: false,
  setLoading: () => {},
};

export const TaskContext = createContext(initState);

export const TaskProvider = ({ children }) => {
  const task = useProviderTask();
  return <TaskContext.Provider value={task}>{children}</TaskContext.Provider>;
};
