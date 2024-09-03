import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className='text-white text-3xl font-bold'>Redux Toolkit Todo</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
