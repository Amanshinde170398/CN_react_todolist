import { useState } from "react";
import { useTask } from "../hooks/task";
import { addTodo } from "../apis/index";

const AddTodo = () => {
  const { tasks, setTasks, addTask, loading, setLoading } = useTask();
  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text) {
      setLoading(true);
      const todo = await addTodo(text, text);
      if (todo.data) {
        setTasks([{ title: text, userId: 1, completed: false }, ...tasks]);
      }
      setLoading(false);
      setText("");
    }
  };
  return (
    <div className="addTodo">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            name="todo"
            placeholder="Add Todo Item"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            className="btn btn-warning"
            style={{ color: "white" }}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddTodo;
