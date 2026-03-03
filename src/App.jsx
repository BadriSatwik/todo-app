import { useEffect, useState } from 'react'
import './App.css'

import TodoLayout from './components/TodoLayout/TodoLayout'

import { todosContext } from './context/context'

function App() {

  const [Todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const storedTodos = localStorage.getItem("todosData")

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todosData", JSON.stringify(Todos))
  }, [Todos])


  return (
    <div className='App'>
      <todosContext.Provider value={{ Todos, setTodos, Todo, setTodo, filter, setFilter }}>

        <TodoLayout />

      </todosContext.Provider>
    </div>
  )
}

export default App
