import { useState } from "react"

function TodoForm(props) {
    const [text, setText] = useState("")

    function handleSubmit() {
        const trimmed = text.trim()

        if (!trimmed) return

        props.handleSubmit(trimmed)

        setText("")
    }

    const form_content = (
        <div className="flex p-3">
            <input 
                type="text"
                value={text}
                maxLength="100"
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a new todo..."
                className="w-2xl p-2 outline font-display focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                aria-label="Write text for a new to-do item"
            />
            <button
                onClick={handleSubmit}
                className="p-2 w-xs ml-3 outline outline-blue-900 hover:bg-blue-900 hover:text-white duration-200 font-display font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
            >
                Confirm To-Do
            </button>
        </div>
    )

    return (
        <div className="container mt-5 mb-5 mx-auto outline outline-blue-900">
            <p className="p-2 font-display bg-blue-900 text-white">Add a new item...</p>
            {form_content}
        </div>
    )
}

export default TodoForm