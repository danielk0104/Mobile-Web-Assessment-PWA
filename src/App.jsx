import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import JournalEntry from './components/JournalEntry'

function App() {
  const journal = [
    {title: 1775221200000, text: "It is done."},
    {title: 1772539200000, text: "I was put on a path which I had to see through."},
    {title: 1772218800000, text: "I didn't know it yet, but my life was about to change."}
  ]

  const journalJSX = journal.map((item, index) => {
    const date = new Date(item.title)
    const dateString = date.toDateString()
    const timeString = date.toLocaleTimeString()
    const date_and_time = dateString + " " + timeString
    
    return (
      <JournalEntry key={index} title={date_and_time} text={item.text} />
    )
  })

  return (
    <div>
      <Header />
      <main>
        {journalJSX}
      </main>
      <Footer />
    </div>
  )
}

export default App
