function TodoItem(props) {
    return (
        <li>
            <div>
                <input 
                    type="checkbox"
                    checked={props.todo.completed}
                    onChange={() => props.handleToggle(props.todo.time)}
                />
                <span className={props.todo.completed ? "line-through text-gray-500" : ""}>
                    {props.todo.text}
                </span>
            </div>
            <button onClick={() => props.handleDelete(props.todo.time)}>
                Delete
            </button>
        </li>
    )
}

export default TodoItem