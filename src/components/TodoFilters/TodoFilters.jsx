import { useContext } from "react"
import { todosContext } from "../../context/context"

const TodoFilters = () => {
  const { setFilter } = useContext(todosContext)

  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("finished")}>Finished</button>
      <button onClick={() => setFilter("active")}>Active</button>
    </div>
  )
}

export default TodoFilters