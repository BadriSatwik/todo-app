import { useContext, useState } from "react"
import { todosContext } from "../../context/context"
import './TodoItem.css'

const TodoItem = () => {
    const { Todos, setTodos, Todo, setTodo, filter } = useContext(todosContext)

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

    function handleEdit(id) {
        const editTodo = Todos.find((item) => item.id === id)
        setTodo(editTodo.Todo)
        const newTodos = Todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }
    return (
        <div className="item-main">
            {Todos
                .filter(item => {
                    if (filter === "finished") return item.isFinished
                    if (filter === "active") return !item.isFinished
                    else return true
                })
                .map((item) => {
                    return <div className="inp" key={item.id}>
                        <div className="name">
                            <input type="checkbox" checked={item.isFinished} onChange={() => handleCheckbox(item.id)} />
                            <div className={item.isFinished ? "line-through" : ""}>{item.Todo}</div>
                        </div>
                        <div className="btn">
                            <button onClick={() => handleEdit(item.id)}><img src="/edit.svg"/></button>
                            <button onClick={() => handleDelete(item.id)}><img src="/delete.svg"/> </button>
                        </div>
                    </div>
                })}
        </div>
    )
}

export default TodoItem
