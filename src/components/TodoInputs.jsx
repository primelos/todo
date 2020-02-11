import React, { useState, useContext } from 'react'
import { TodoInputContext } from '../context'

const TodoInputs = () => {
    const { addTodo } = useContext(TodoInputContext)
    const [value, setValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (!value) return;
        addTodo(value);
        setValue('')
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input 
                    type='text'
                    className='input'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </div>
    )
}


export default TodoInputs