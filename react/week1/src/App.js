import "./index.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <TodoList customCss={"items"} />
    </div>
  );
}

export default App;
