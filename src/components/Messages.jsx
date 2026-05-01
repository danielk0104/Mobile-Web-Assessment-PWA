import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

function Messages() {
    // Motivational messages
    const messages = [
        "Message 1",
        "Message 2",
        "Message 3",
        "Message 4",
        "Message 5",
        "Message 6",
        "Message 7",
        "Message 8",
        "Message 9",
        "Message 10"
    ]

    const location = useLocation()
    const [display, setDisplay] = useState("")

    // Changed the displayed message every time the user navigates to a new page
    useEffect(function() {
        setDisplay(
            // Choose a random message
            messages[Math.floor(Math.random() * messages.length)]
        )
    }, [location.pathname])

    return (
        <div className="mt-5">
            <p className="text-sm font-display italic text-center">{display}</p>
        </div>
    )
}

export default Messages