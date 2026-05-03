function TodoItem(props) {
    return (
        <li className="mb-5 p-3 outline">
            <div className="mb-5">
                <input 
                    type="checkbox"
                    checked={props.todo.completed}
                    onChange={() => props.handleToggle(props.todo.time)}
                    className="mr-3 cursor-pointer"
                />
                <span className={props.todo.completed ? "line-through text-gray-500 font-display" : "font-display"}>
                    {props.todo.text}
                </span>
            </div>
            <button className="p-2 outline outline-red-500 font-display font-bold cursor-pointer hover:bg-red-500 hover:text-white duration-200" onClick={() => props.handleDelete(props.todo.time)}>
                Delete
            </button>
        </li>
    )
}

export default TodoItem