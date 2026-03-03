import TodoSidebar from '../TodoSidebar/TodoSidebar'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoInput from '../TodoInput/TodoInput'
import TodoList from '../TodoList/TodoList'

import './TodoLayout.css'
import TodoItem from '../TodoItem/TodoItem'

const TodoLayout = ({ Todos, setTodos }) => {
  return (
  <div>
    <div className="Header"><TodoHeader /></div>

    <div className='TodoLayout'>

      <div className="Sidebar"><TodoSidebar /></div>

      <div className='Main'>
        <div className="Input"><TodoInput /></div>
        <div className="List"><TodoItem /></div>
      </div>

    </div>

  </div>
  )
}

export default TodoLayout
