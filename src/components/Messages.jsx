import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"

function Messages() {
    // Motivational messages
    const messages = [
        "'There is only one way to avoid criticism: do nothing, say nothing and be nothing.' –Aristotle",
        "'Believe you can and you're halfway there.' –Theodore Roosevelt",
        "If the wind will not serve, take to the oars.",
        "'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.' –Henry Ford",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "'You miss 100% of the shots you don't take.' –Wayne Gretzky",
        "'Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.' –George Herbert",
        "'Change is the law of life. And those who look only to the past or present are certain to miss the future.' –John F. Kennedy",
        "'You can never cross the ocean until you have the courage to lose sight of the shore.' –Christopher Columbus",
        "Fall seven times and stand up eight."
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
        <div className="px-5 mt-15">
            <hr className="mt-3 mb-2"></hr>
            <p className="text-sm font-display italic text-center">{display}</p>
            <hr className="mt-2 mb-3"></hr>
        </div>
    )
}

export default Messages