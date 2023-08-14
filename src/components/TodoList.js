import { useEffect, useState } from "react";
import { fetchTodos } from "../apis";
import { useTask } from "../hooks/task";
import { removeTodo } from "../apis";
import { Link } from "react-router-dom";

const TodoList = () => {
  const { tasks, setTasks, addTask } = useTask();

  // mark Task completed
  const toggleTodo = (taskIndex) => {
    setTasks(
      tasks.map((task, index) => {
        if (index == taskIndex) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };

  // delete Task
  const removeTask = async (taskIndex) => {
    await removeTodo(taskIndex);
    setTasks(
      tasks.filter((task, index) => {
        if (index != taskIndex) return task;
      })
    );
  };

  return (
    <div className="todoList">
      <ul>
        {tasks.map((todo, index) => {
          return (
            <li className="todoItem" key={index}>
              <div id={`task-${index}`}>
                <span
                  id={`taskTitle-${index}`}
                  className={todo.completed ? "completed" : ""}
                >
                  {todo.title}
                </span>
              </div>

              <span className="action-icons">
                <i
                  className="fa-solid fa-trash mr-4"
                  onClick={() => {
                    removeTask(index);
                  }}
                ></i>
                <Link to={`/task/${index}`}>
                  <i className="fa-solid fa-pen-to-square mr-4 update"></i>
                </Link>

                {todo.completed ? (
                  <i
                    className="fa-regular fa-circle-xmark"
                    onClick={() => {
                      toggleTodo(index);
                    }}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-check"
                    onClick={() => {
                      toggleTodo(index);
                    }}
                  ></i>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
