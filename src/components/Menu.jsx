import { Link } from "react-router-dom"

function Menu() {
    return (
        <div className="container mx-auto p-3">
            <nav className="flex outline outline-blue-900 bg-white text-blue-900">
                <ul className="flex w-full">
                    <li className="h-full w-full outline">
                        <Link to="/">
                            <div className="flex items-center justify-center text-center py-2 text-black hover:bg-blue-900 hover:text-white duration-200 h-full text-lg font-display font-bold">Home</div>
                        </Link>
                    </li>
                    <li className="h-full w-full">
                        <Link to="/to-do">
                            <div className="flex items-center justify-center text-center py-2 text-black hover:bg-blue-900 hover:text-white duration-200 h-full text-lg font-display font-bold">To-Do List</div>
                        </Link>
                    </li>
                    <li className="h-full w-full outline">
                        <Link to="/journal">
                            <div className="flex items-center justify-center text-center py-2 text-black hover:bg-blue-900 hover:text-white duration-200 h-full text-lg font-display font-bold">Journal</div>
                        </Link>
                    </li>
                    <li className="h-full w-full">
                        <Link to="/timer">
                            <div className="flex items-center justify-center text-center py-2 text-black hover:bg-blue-900 hover:text-white duration-200 h-full text-lg font-display font-bold">Timer</div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu