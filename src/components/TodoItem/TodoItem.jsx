import { useContext } from "react"
import { todosContext } from "../../context/context"
// const {Todos,setTodos} = useContext(todosContext)

const TodoItem = () => {
    const {Todos,setTodos} = useContext(todosContext)
  return (
    <div>
     {Todos.map((item) => {
        return <p key={item.id}>
            {item.Todo} 
            <button>Edit</button>
            <button>Delete</button>
        </p>
     })}
    </div>
  )
}

export default TodoItem
