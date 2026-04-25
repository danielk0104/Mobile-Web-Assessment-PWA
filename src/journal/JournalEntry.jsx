import { useState } from "react"

function JournalEntry(props) {
    const [isVisible, setVisible] = useState(false);

    function clickVisible() {
        setVisible(!isVisible);
    }

    const entry = <p>{props.text}</p>
    const timestamp = <p>({props.time})</p>

    return (
        <section>
            <h2 onClick={()=>clickVisible()}>{props.title}</h2>
            {isVisible ? timestamp : null}
            { isVisible ? entry : null }
        </section>
    )
}

export default JournalEntry