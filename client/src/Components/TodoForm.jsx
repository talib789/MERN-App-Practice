import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addNewTodo } from '../redux/actions'
const TodoForm = () => {
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState("")
    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(inputs))
        setInputs("")
        window.location.reload()
    }
    const onInputChange = (e) => {
        setInputs(e.target.value)
    }
  return (
    <div>
        <form action="" onSubmit={onFormSubmit} className='form'>
            <input value={inputs} onChange={onInputChange} className='input' type="text" placeholder='Enter new todo...'/>
        </form>
    </div>
  )
}

export default TodoForm