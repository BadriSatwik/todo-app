import './TodoInput.css'
import { useContext } from "react"
import { todosContext } from "../../context/context"
import { v4 as uuidv4 } from 'uuid';

const TodoInput = () => {
  const { Todos, setTodos, Todo, setTodo, TodoLists, setTodoLists, activeListId, setActiveListId } = useContext(todosContext)

  function handleClick() {
  if (Todo.trim() === "") return 
  setTodos([...Todos, {Todo, id: uuidv4(), isFinished: false }])

  setTodoLists(
    TodoLists.map(list =>
      list.id === activeListId
        ? { ...list, Todos: [...list.Todos, {Todo, id: uuidv4(), isFinished: false }] }
        : list
    )
  )

  setTodo("")
}

  function handleChange(e) {
    setTodo(e.target.value)
  }
  return (
    <div className='TodoInput'>
      <input type="text" value={Todo} placeholder='add a todo' onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default TodoInput