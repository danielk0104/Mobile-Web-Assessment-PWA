import "./App.css"
import { Routes, Route } from "react-router-dom"
import Journal from "./journal/Journal"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Journal />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App