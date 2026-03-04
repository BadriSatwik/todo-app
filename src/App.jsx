import { useEffect, useState } from 'react'
import './App.css'
import { todosContext } from './context/context'
import TodoLayout from './components/TodoLayout/TodoLayout'

function App() {
  const [activeListId, setActiveListId] = useState(null)
  const [TodoLists, setTodoLists] = useState([])
  const [Todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const storedTodos = localStorage.getItem("todosData")
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
    const storedLists = localStorage.getItem("todoLists")
    if (storedLists) {
      setTodoLists(JSON.parse(storedLists))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todosData", JSON.stringify(Todos))
  }, [Todos])
  useEffect(() => {
    localStorage.setItem("todoLists", JSON.stringify(TodoLists))
  }, [TodoLists])

  return (
    <div className='App'>
      <todosContext.Provider value={{ Todos, setTodos, Todo, setTodo, filter, setFilter, TodoLists, setTodoLists, activeListId, setActiveListId }}>
        <TodoLayout/>
      </todosContext.Provider>
    </div>
  )
}

export default App
