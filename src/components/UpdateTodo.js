import { useNavigate, useParams } from "react-router-dom";
import { useTask } from "../hooks/task";
import { useEffect, useState } from "react";
import { updateTodo } from "../apis";

const UpdateTodo = () => {
  const { tasks, setTasks, loading, setLoading } = useTask();
  const { index } = useParams();
  const [text, setText] = useState(tasks[index]?.title || "");
  const navigate = useNavigate();

  const updateTask = async () => {
    setLoading(true);
    const todo = await updateTodo(text, index);
    setTasks(
      tasks.map((todo, i) => {
        if (index == i) {
          todo.title = text;
        }
        return todo;
      })
    );
    setLoading(false);
    return navigate("/");
  };

  useEffect(() => {}, []);

  return (
    <div className="updateTodo">
      <input
        value={text}
        placeholder="update task"
        className="mr-4"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className="btn btn-warning update"
        disabled={loading}
        onClick={updateTask}
      >
        {loading ? "Updating..." : "Update"}
      </button>
    </div>
  );
};

export default UpdateTodo;
