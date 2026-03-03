import { useState } from 'react'
import './App.css'

import TodoLayout from './components/TodoLayout/TodoLayout'

import { todosContext } from './context/context'

function App() {
  
  const [Todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")

  return (
    <div className='App'>
      <todosContext.Provider value={{Todos,setTodos}}>

        <TodoLayout />

      </todosContext.Provider>
    </div>
  )
}

export default App
