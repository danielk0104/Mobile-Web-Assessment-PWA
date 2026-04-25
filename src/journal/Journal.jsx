import { useState } from "react"
import JournalEntry from "./JournalEntry"
import JournalForm from "./JournalForm"

function Journal() {
    //const journal = [
    //{title: "It's Done", time: 1775221200000, text: "It is done."},
    //{title: "Warmth of a New Dawn", time: 1772539200000, text: "I was put on a path which I had to see through."},
    //{title: "Requiem", time: 1772218800000, text: "I didn't know it yet, but my life was about to change."}
  //]
  const [journal, setJournal] = useState([])

  function addEntry(title, text) {
    setJournal(
      [...journal, {title: title, time: Date.now(), text: text}]
    )
  }

  const journalJSX = journal.map((item, index) => {
    return (
      <JournalEntry key={index} title={item.title} time={item.time} text={item.text} />
    )
  })

  return (
    <div>
      <JournalForm handleSubmit={addEntry} />
      {journalJSX}
    </div>
  )
}

export default Journal