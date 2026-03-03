import { useState } from 'react'
import './TodoInput.css'
import { useContext } from "react"
import { todosContext } from "../../context/context"

import { v4 as uuidv4 } from 'uuid';

const TodoInput = () => {
  const { Todos, setTodos } = useContext(todosContext)
  const [Todo, setTodo] = useState("")

  function handleClick() {
    if (Todo.trim() === "") return

    setTodos([...Todos, { Todo , id : uuidv4() ,  isFinished : false }])
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
