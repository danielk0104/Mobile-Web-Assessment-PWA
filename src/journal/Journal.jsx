import { useState } from "react"
import Header from "../components/Header"
import JournalEntry from "./JournalEntry"
import JournalForm from "./JournalForm"

function Journal() {
  const [journal, setJournal] = useState(function() {
    const stored = localStorage.getItem('journal')
    if (stored) {
      return JSON.parse(stored)
    } else {
      return []
    }
  })

  // State for seach term entered by user
  const [search, setSearch] = useState("")

  const journalJSX = journal.map((item, index) => {
    return (
      <JournalEntry key={index} title={item.title} time={item.time} text={item.text} handleDelete={deleteEntry} search={search} />
    )
  })

  // Create a new journal entry
  function addEntry(title, text) {
    const updatedEntry = [...journal, {title: title, time: Date.now(), text: text}]
    setJournal(updatedEntry)
    localStorage.setItem("journal", JSON.stringify(updatedEntry))
  }

  // Delete an entry
  function deleteEntry(time) {
    const updatedEntry = todos.filter(
      function (entry) {
      return entry.time !== time
      }
    )
    setJournal(updatedEntry)
    localStorage.setItem("journal", JSON.stringify(updatedEntry))
  }

  return (
    <div className="container mx-auto p-5">
      <Header title="Journal" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search entries..."
        className="p-2 outline w-full font-display"
      />
      <JournalForm handleSubmit={addEntry} />
      <p className="mb-3 text-lg font-display">Past entries...</p>
      {journalJSX}
    </div>
  )
}

export default Journal