import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../features/todos/todosSlice'

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('')
  const onChange = e => setTodoText(e.target.value)
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!todoText.trim()) {
            return
          }
          addTodo(todoText)
          setTodoText('')
        }}
      >
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

const mapState = state => {
  return { todos: state.todos }
}

export default connect(mapState, actions)(AddTodo)
