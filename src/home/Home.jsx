import Header from "../components/Header"
import logo from "../assets/logo.svg"
import ImageButton from "../components/ImageButton"
import todo_image from "../assets/todo.jpg"
import journal_image from "../assets/journal.jpg"
import timer_image from "../assets/timer.jpg"

const app_logo = (
    <div className="flex justify-center">
        <img className="w-10" src={logo}></img>
        <p className="ml-2 text-4xl font-display font-light">Consil</p>
    </div>
)

function Home() {
    return (
        <div className="container mx-auto p-5">
            <Header title="Home" />
            {app_logo}
            <p className="mb-10 text-center text-xs font-display">Motivational App</p>
            <p className="font-display text-center">Welcome to the app. Use the buttons below to access the app's functions; or, use the top menu.</p>
            <ImageButton image={todo_image} text="To-Do List" to="/to-do" />
            <ImageButton image={journal_image} text="Journal" to="/journal"/>
            <ImageButton image={timer_image} text="Timer" to="/timer" />
        </div>
    )
}

export default Home