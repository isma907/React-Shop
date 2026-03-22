import { Link } from "react-router";

export default function Header() {
    return (
        <header className="main-navbar">
            <h1>My App</h1>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </header>
    )
}
