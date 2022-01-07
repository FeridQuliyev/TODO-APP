import React from 'react'
import "../Todoform/Todoform.css"
import { useState, useEffect, useRef } from "react"
function Todoform(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    });

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='todo-form'>
                {props.edit ? (
                    <>
                        <input
                            placeholder='Update your item'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            ref={inputRef}
                            className='todo-input edit'
                        />
                        <button onClick={handleSubmit} className='todo-button edit'>
                            Update
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            placeholder='Add a todo'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            className='todo-input'
                            ref={inputRef}
                        />
                        <button onClick={handleSubmit} className='todo-button'>
                            Add todo
                        </button>
                    </>
                )}
            </form>
        </div>
    )
}

export default Todoform
