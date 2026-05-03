import Header from "../components/Header"
import { ReactComponent as Logo } from "../assets/logo.svg"

const logo = (
    <div className="flex">
        <Logo />
    </div>
)

function Home() {
    return (
        <div className="container mx-auto p-5">
            {logo}
            <Header title="Home" />
            <p className="font-display text-center">Welcome to the app.</p>
        </div>
    )
}

export default Home