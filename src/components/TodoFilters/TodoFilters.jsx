import { useContext } from "react"
import { todosContext } from "../../context/context"

import './TodoFilters.css'

const TodoFilters = () => {
  const { setFilter } = useContext(todosContext)

  return (
    <div className="filter">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("finished")}>Finished</button>
      <button onClick={() => setFilter("active")}>Active</button>
    </div>
  )
}

export default TodoFilters