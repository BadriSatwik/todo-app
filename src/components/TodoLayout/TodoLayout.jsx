import TodoSidebar from '../TodoSidebar/TodoSidebar'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoInput from '../TodoInput/TodoInput'
import TodoFilters from '../TodoFilters/TodoFilters'
import TodoItem from '../TodoItem/TodoItem'

import './TodoLayout.css'

import { useContext, useState } from "react"
import { todosContext } from "../../context/context"

const TodoLayout = () => {
  const { activeListId } = useContext(todosContext)
  return (
    <div>
      <div className="Header"><TodoHeader /></div>
      <div className='TodoLayout'>

        <div className="Sidebar"><TodoSidebar /></div>


        <div className='Main'>
          {activeListId !== null ? <div><div className="Input"><TodoInput /></div>
            <div className="Filters"><TodoFilters /></div>
            <div className="List"><TodoItem /></div>
          </div> : <div>Hello Everyone...Welcome To MY TODO APP</div>}

        </div>

      </div>

    </div>
  )
}

export default TodoLayout
