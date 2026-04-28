import { useState } from "react"
import Header from "../components/Header"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"

function Todo() {
    const [todos, setTodos] = useState([])

    // Create a new todo
    function addTodo(text) {
        setTodos(
            [...todos, {time: Date.now(), text: text, completed: false}]
        )
    }

    // Toggle the status of a todo
    function toggleTodo(time) {
        setTodos(
            todos.map(
                function (todo) {
                    return todo.time === time ? { ...todo, completed: !todo.completed } : todo
                }
            )
        )
    }

    // Delete a todo
    function deleteTodo(time) {
        setTodos(
            todos.filter(
                function (todo) {
                    return todo.time !== time
                }
            )
        )
    }

    return (
        <div>
            <Header title="To-Do List" />
            <TodoForm handleSubmit={addTodo} />
            <TodoList todos={todos} handleToggle={toggleTodo} handleDelete={deleteTodo}/>
        </div>
    )
}

export default Todo