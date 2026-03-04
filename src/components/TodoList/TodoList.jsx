import { useContext, useState } from "react"
import { todosContext } from "../../context/context"

const TodoList = () => {
  const { Todos, setTodos, TodoLists, setTodoLists, activeListId, setActiveListId } = useContext(todosContext)

  function handleListItem(id) {
    setActiveListId(id)
    const selectedList = TodoLists.find(item => item.id === id)
    setTodos(selectedList.Todos)
  }

  function handleDelete(id) {
    const newTodoLists = TodoLists.filter((TodoListItem) => TodoListItem.id !== id)
    setTodoLists(newTodoLists)
  }
  return (
    <div>
      {TodoLists.map((item) => {
        return <div key={item.id}>

          <button onClick={() => handleListItem(item.id)}>
            {item.TodoListItem}
          </button>

          <button onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      })}
    </div>
  )
}

export default TodoList
