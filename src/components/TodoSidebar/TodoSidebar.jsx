import './TodoSidebar.css'
import TodoList from '../TodoList/TodoList'
import { useContext, useState } from "react"
import { todosContext } from "../../context/context"
import { v4 as uuidv4 } from 'uuid';


const TodoSidebar = () => {
  const { TodoLists, setTodoLists } = useContext(todosContext)
  const [TodoListItem, setTodoListItem] = useState([])

  function handleAdd() {
    setTodoLists([...TodoLists, { TodoListItem, id: uuidv4(), Todos: [] }])
    setTodoListItem("")
  }

  function handleChange(e) {
    setTodoListItem(e.target.value)
  }

  return (
    <div className='TodoSidebar'>
      <h2>Todo Lists :</h2>
      <button onClick={handleAdd}>Add List</button>
      <input type="text" value={TodoListItem} placeholder='add a todolist' onChange={handleChange} />
      <TodoList TodoListItem={TodoListItem} setTodoListItem={setTodoListItem} />
    </div>
  )
}

export default TodoSidebar
