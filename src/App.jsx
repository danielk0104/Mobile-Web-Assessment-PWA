import { Routes, Route } from "react-router-dom"
import Menu from "./components/Menu"
import Messages from "./components/Messages"
import Home from "./home/Home"
import Todo from "./todo/Todo"
import Journal from "./journal/Journal"
import Timer from "./timer/Timer"

const main_content = (
  <div className="pt-20">
    <Messages />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/to-do" element={<Todo />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="*" element={<h1 className="p-5 text-display font-bold text-2xl">Page Not Found</h1>} />
    </Routes>
  </div>
)

function App() {
  return (
    <div className="bg-white min-h-screen shadow-2xl">
      <Menu />
      {main_content}
    </div>
  )
}

export default App