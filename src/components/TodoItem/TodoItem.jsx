import { useContext } from "react"
import { todosContext } from "../../context/context"
// const {Todos,setTodos} = useContext(todosContext)

const TodoItem = () => {
    const { Todos, setTodos } = useContext(todosContext)

    function handleDelete(id) {
        const newTodos = Todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }
    return (
        <div>
            {Todos.map((item) => {
                return <p key={item.id}>
                    {item.Todo}
                    <button>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </p>
            })}
        </div>
    )
}

export default TodoItem
