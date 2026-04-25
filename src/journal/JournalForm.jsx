import { useState } from "react"

function JournalForm(props) {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    function handleSubmit() {
        const trimmedTitle = title.trim()
        const trimmedText = text.trim()

        if (!trimmedTitle, !trimmedText) return

        props.handleSubmit(trimmedTitle, trimmedText)

        setTitle("")
        setText("")
    }

    return (
        <div>
            <input 
                type="text"
                value={title}
                maxLength="100"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a title..."
            />
            <input 
                type="text"
                value={text}
                maxLength="500"
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a new entry..."
            />
            <button
                onClick={handleSubmit}
            >
                Confirm Entry
            </button>
        </div>
    )
}

export default JournalForm