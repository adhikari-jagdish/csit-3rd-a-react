import { Link, Outlet } from "react-router-dom";
import './home.css';
const NavBar = () => {

    return (
        <>
            <nav className="navbar">
                <div className="logo">Movies App</div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
                
            </nav>
            <Outlet />
        </>

    )
}

export default NavBar;