import React from 'react'
import "../Todolist/Todolist.css"
import { useState } from "react"
import Todo from "../Todo/Todo"
import Todoform from "../Todoform/Todoform"
function Todolist() {
    const [todos, setTodos] = useState([]);
    function addTodo(todo) {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);
    };

    function updateTodo(todoId, newValue) {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    function removeTodo(id) {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    }

    function completeTodo(id) {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };


    return (
        <div>
            <>
               
                <Todoform onSubmit={addTodo} />
                <Todo
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            </>
        </div>
    )
}

export default Todolist

