import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Journal from './journal/Journal'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Journal />
      </main>
      <Footer />
    </div>
  )
}

export default App