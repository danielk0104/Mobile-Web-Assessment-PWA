import { useState } from "react"
import Header from "../components/Header"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"

function Todo() {
    const [todos, setTodos] = useState(function() {
        const stored = localStorage.getItem('todos')
        if (stored) {
            return JSON.parse(stored)
        } else {
            return []
        }
    })

    const [selected, setSelected] = useState("all")

    // Create a new todo
    function addTodo(text) {
        const updatedTodos = [...todos, { time: Date.now(), text: text, completed: false }]
        setTodos(updatedTodos)
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }

    // Toggle the status of a todo
    function toggleTodo(time) {
        const updatedTodos = todos.map(
            function (todo) {
                return todo.time === time ? { ...todo, completed: !todo.completed } : todo
            }
        )
        setTodos(updatedTodos)
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }

    // Delete a todo
    function deleteTodo(time) {
        const updatedTodos = todos.filter(
            function (todo) {
            return todo.time !== time
        }
        )
        setTodos(updatedTodos)
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }

    // Filtering to do items
    function handleSelected(e) {
        setSelected(e.target.value)
    }

    return (
        <div>
            <Header title="To-Do List" />
            <TodoForm handleSubmit={addTodo} />
            <select onChange={handleSelected} value={selected}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
            </select>
            <TodoList
                todos={todos}
                handleToggle={toggleTodo}
                handleDelete={deleteTodo}
                selected={selected} />
        </div>
    )
}

export default Todo