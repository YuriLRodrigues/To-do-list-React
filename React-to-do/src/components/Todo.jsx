const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className="todo">
      <div className="content">
        <p className={todo.isCompleted ? "completed-task" : ""}>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </div>
  )
}

export default Todo