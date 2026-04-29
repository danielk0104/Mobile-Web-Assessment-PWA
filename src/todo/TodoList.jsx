import Todo from "./Todo"
import TodoItem from "./TodoItem"

function TodoList(props) {
    if (props.todos.length === 0) {
        return <p>No items yet. Add one!</p>
    }

    const todos = props.todos.map(
        function (todo) {
            if (props.selected === "active" && todo.completed) {
                return null
            }

            if (props.selected === "completed" && !todo.completed) {
                return null
            }

            return (
                <TodoItem 
                    key={todo.time}
                    todo={todo}
                    handleToggle={props.handleToggle}
                    handleDelete={props.handleDelete}
                />
            )
        }
    )

    return (
        <ul>
            {todos}
        </ul>
    )
}

export default TodoList