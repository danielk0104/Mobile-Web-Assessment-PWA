import Header from "../components/Header"
import logo from "../assets/logo.svg"

const app_logo = (
    <div className="flex justify-center">
        <img className="w-8" src={logo}></img>
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
        </div>
    )
}

export default Home