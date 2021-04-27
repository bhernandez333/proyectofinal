import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
    return (
        <ul> 
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Crear">Crear</Link>
            </li>
        </ul>
        )
}


export default Header;