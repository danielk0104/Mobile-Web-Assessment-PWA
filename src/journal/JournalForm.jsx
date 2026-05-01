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

    const form = (
        <div className="p-3">
            <input 
                type="text"
                value={title}
                maxLength="100"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a title..."
                className="p-2 mb-5 outline w-full font-display"
            />
            <input 
                type="text"
                value={text}
                maxLength="500"
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a new entry..."
                className="p-2 mb-5 outline w-full font-display"
            />
            <button
                onClick={handleSubmit}
                className="p-2 outline outline-blue-900 font-display font-bold cursor-pointer hover:bg-blue-900 hover:text-white duration-200"
            >
                Confirm Entry
            </button>
        </div>
    )

    return (
        <div className="container mt-5 mb-5 mx-auto outline outline-blue-900">
            <p className="p-2 font-display bg-blue-900 text-white">Add a new entry...</p>
            {form}
        </div>
    )
}

export default JournalForm