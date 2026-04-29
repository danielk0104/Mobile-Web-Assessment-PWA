import { useState } from "react"
import Header from "../components/Header"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"

function Todo() {
    const [todos, setTodos] = useState([])

    const [selected, setSelected] = useState("all")

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