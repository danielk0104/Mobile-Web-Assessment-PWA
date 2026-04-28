import "./App.css"
import { Routes, Route } from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./home/Home"
import Journal from "./journal/Journal"
import Todo from "./todo/Todo"
import Timer from "./timer/Timer"

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/to-do" element={<Todo />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App