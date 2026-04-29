import { useState } from "react"
import Header from "../components/Header"
import JournalEntry from "./JournalEntry"
import JournalForm from "./JournalForm"

function Journal() {
  const [journal, setJournal] = useState([])

  const journalJSX = journal.map((item, index) => {
    return (
      <JournalEntry key={index} title={item.title} time={item.time} text={item.text} handleDelete={deleteEntry} />
    )
  })

  // Create a new journal entry
  function addEntry(title, text) {
    setJournal(
      [...journal, {title: title, time: Date.now(), text: text}]
    )
  }

  // Delete an entry
  function deleteEntry(time) {
    setJournal(
      journal.filter(
        function(entry) {
          return entry.time !== time
        }
      )
    )
  }

  return (
    <div>
      <Header title="Journal" />
      <JournalForm handleSubmit={addEntry} />
      {journalJSX}
    </div>
  )
}

export default Journal