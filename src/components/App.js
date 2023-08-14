import UpdateTodo from "./UpdateTodo";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/task/:index" Component={UpdateTodo} />
      </Routes>
    </div>
  );
}

export default App;
