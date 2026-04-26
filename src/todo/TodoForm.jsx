import { useState } from "react"

function TodoForm(props) {
    const [text, setText] = useState("")

    function handleSubmit() {
        const trimmed = text.trim()

        if (!trimmed) return

        props.handleSubmit(trimmed)

        setText("")
    }

    return (
        <div>
            <input 
                type="text"
                value={text}
                maxLength="100"
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a new todo..."
            />
            <button
                onClick={handleSubmit}
            >
                Confirm Todo
            </button>
        </div>
    )
}

export default TodoForm