import { NavLink } from "react-router-dom";
import Button from "../ui/Button.tsx";

function Header () {

    return (
        <header id="main-header">
            <h1>ReactMentoring</h1>
            <nav>
                <ul>
                    <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Our Mission</NavLink>
                    <NavLink to="/sessions" className={({isActive}) => isActive ? 'active' : ''}>Browse Sessions</NavLink>
                    <Button>Upcoming Sessions</Button>
                </ul>
            </nav>
        </header>
    )
}

export default Header;