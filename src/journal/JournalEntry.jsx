import { useState } from "react"

function JournalEntry(props) {
    const [isVisible, setVisible] = useState(false);

    // Make an entry visible when it's clicked on
    function clickVisible() {
        setVisible(!isVisible)
    }

    const entry = <p className="mb-5 font-display">{props.text}</p>
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

    // If an entry (both title & text) does not include the search term, return null to exclude from the list
    if (props.search && !props.title.toLowerCase().includes(props.search.toLowerCase()) && !props.text.toLowerCase().includes(props.search.toLowerCase())) {
        return null;
    }

    const heading = (
        <div className="flex outline outline-blue-900">
            <h2 className="p-2 bg-blue-900 outline outline-blue-900 text-white font-display font-bold text-xl hover:bg-white hover:text-black duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700" tabIndex={0} onClick={() => clickVisible()}>{props.title}</h2>
            <p className="p-2 ml-1 font-display italic font-bold">{formattedDate}</p>
        </div>
    )

    const body = (
        <div className="p-3">
            { isVisible ? entry : null }
            <button className="p-2 outline outline-red-500 font-display font-bold cursor-pointer hover:bg-red-500 hover:text-white duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700" onClick={() => props.handleDelete(props.time)}>Delete Entry</button>
        </div>
    )

    return (
        <section className="mb-5 mt-5 outline">
            {heading}
            {body}
        </section>
    )
}

export default JournalEntry