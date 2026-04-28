import { Link } from "react-router-dom"

function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <div>Home</div>
                    </Link>
                </li>
                <li>
                    <Link to="/journal">
                        <div>Journal</div>
                    </Link>
                </li>
                <li>
                    <Link to="/to-do">
                        <div>To-Do</div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu