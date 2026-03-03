import { useContext, useState } from "react"
import { todosContext } from "../../context/context"
// const { Todos, setTodos, Todo, setTodo } = useContext(todosContext)

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
        <div>
            {Todos
                .filter(item => {
                    if (filter === "finished") return item.isFinished
                    if (filter === "active") return !item.isFinished
                    else return true
                })
                .map((item) => {
                    return <div key={item.id}>
                        <input type="checkbox" checked={item.isFinished} onChange={() => handleCheckbox(item.id)} />
                        <div className={item.isFinished ? "line-through" : ""}>{item.Todo}</div>
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                })}
        </div>
    )
}

export default TodoItem
