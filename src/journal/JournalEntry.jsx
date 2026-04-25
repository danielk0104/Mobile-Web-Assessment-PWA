import { useState } from "react"

function JournalEntry(props) {
    const [isVisible, setVisible] = useState(false);

    function clickVisible() {
        setVisible(!isVisible)
    }

    const entry = <p>{props.text}</p>
    const date = new Date(props.time)
    const formattedDate = date.toLocaleString("en-GB",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    )

    return (
        <section>
            <h2 onClick={() => clickVisible()}>{props.title}</h2>
            <button onClick={() => props.handleDelete(props.time)}>Delete</button>
            {isVisible ? formattedDate : null}
            { isVisible ? entry : null }
        </section>
    )
}

export default JournalEntry