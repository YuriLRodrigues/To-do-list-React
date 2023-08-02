import { useState } from "react";
import "./styles/App.sass";
import Todo from "./components/Todo";
import TodoFrom from "./components/TodoFrom";
import Search from "./components/Search";
import Filter from "./components/Filter";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);
  const [search, setSearch] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [category, setCategory] = useState("All");

  const addTodo = (text, category) => {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodo);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };
  console.log(category)
  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        category={category}
        setCategory={setCategory}
      />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            category === "All"
              ? true
              : category === "Estudos"
              ? todo.category === "Estudos"
              : category === "Pessoal"
              ? todo.category === "Pessoal"
              : todo.category === "Trabalho"
          )
          .filter((todo) => todo.text.toLowerCase().includes(search))
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              todo={todo}
              key={todo.id}
            />
          ))}
      </div>
      <TodoFrom addTodo={addTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
