import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo, updateTodo } from '../redux/actions'
const Todo = ({ todo }) => {
    const [editing, setEditing] = useState(false)
    const dispatch = useDispatch()
    const [input, setInput] = useState(todo.data)
    const onFormSubmit = (e) => {
        e.preventDefault()
        setEditing((prevState) => !prevState)
        dispatch(updateTodo(todo._id, input))
    }
    return (
        <li className='task' onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done ? 'line-through' : '',
                color: todo.done ? '#bdc3c7' : "#34495e"

            }}>
            <span style={{
                display: editing ? "none" : "block"
            }}>{todo.data}</span>

            <form onSubmit={onFormSubmit} action="" style={{
                display: editing ? "inline" : "none"
            }}>
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} className='edit-todo' />
            </form>
            <span className='icon' onClick={() => dispatch(deleteTodo(todo._id))}>
                <i className='fa fa-trash' />
            </span>
            <span onClick={() => setEditing(prevState => !prevState)} className='icon'>
                <i className='fa fa-edit' />
            </span>
        </li>
    )
}

export default Todo