import { useContext } from "react"
import { todosContext } from "../../context/context"
// const {Todos,setTodos} = useContext(todosContext)

import './TodoItem.css'

const TodoItem = () => {
    const { Todos, setTodos } = useContext(todosContext)

    function handleDelete(id) {
        const newTodos = Todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }

    function handleCheckbox(id) {
        const newTodos = Todos.map((todo) =>
            todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo
        )
        setTodos(newTodos)
    }
    return (
        <div>
            {Todos.map((item) => {
                return <div key={item.id}>
                    <input type="checkbox" checked={item.isFinished} onChange={() => handleCheckbox(item.id)} />
                    <div className={item.isFinished ? "line-through" : ""}>{item.Todo}</div>
                    <button>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            })}
        </div>
    )
}

export default TodoItem
