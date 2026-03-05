import './TodoSidebar.css'
import TodoList from '../TodoList/TodoList'
import { useContext, useState } from "react"
import { todosContext } from "../../context/context"
import { v4 as uuidv4 } from 'uuid';


const TodoSidebar = () => {
  const { TodoLists, setTodoLists } = useContext(todosContext)
  const [TodoListItem, setTodoListItem] = useState("")
  const [showInput, setShowInput] = useState(false);

  function handleAdd() {
  if (!showInput) {
    setShowInput(true)
    return
  }
  if (TodoListItem.trim() === "") return
  else{
  setTodoLists([...TodoLists, { TodoListItem, id: uuidv4(), Todos: []}])
  setTodoListItem("")
  setShowInput(false)
  }
}

  function handleChange(e) {
    setTodoListItem(e.target.value)
  }

  return (
    <div className='side'>
      <div className='heading'>Todo Lists : </div>
      <div className='TodoSidebar'>
        {showInput && <input type="text" value={TodoListItem} placeholder='ADD A TODO-LIST' onChange={handleChange} />}
        <button className='Addbtn' onClick={handleAdd}>Add List <img src='/addList.svg'/></button>
        <TodoList TodoListItem={TodoListItem} setTodoListItem={setTodoListItem} />
      </div>
    </div>
  )
}

export default TodoSidebar
