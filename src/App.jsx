import "./App.css"
import { Routes, Route } from "react-router-dom"
import Menu from "./components/Menu"
import Messages from "./components/Messages"
import Home from "./home/Home"
import Todo from "./todo/Todo"
import Journal from "./journal/Journal"
import Timer from "./timer/Timer"

function App() {
  return (
    <div>
      <Menu />
      <Messages />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/to-do" element={<Todo />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App