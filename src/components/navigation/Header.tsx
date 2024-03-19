import { NavLink } from "react-router-dom";
import Button from "../ui/Button.tsx";
import { useState } from "react";
import UpcomingSessions from "../sessions/UpcomingSessions.tsx";

function Header () {
    const [visibleUpcoming, setVisibleUpcoming] = useState(false);


    function handleOpenUpcoming() {
        setVisibleUpcoming(true);
    };

    function handleCloseUpcoming() {
        setVisibleUpcoming(false);
    }

    return (
        <header id="main-header">
            {visibleUpcoming && <UpcomingSessions onClose={handleCloseUpcoming} />}
            <h1>ReactMentoring</h1>
            <nav>
                <ul>
                    <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Our Mission</NavLink>
                    <NavLink to="/sessions" className={({isActive}) => isActive ? 'active' : ''}>Browse Sessions</NavLink>
                    <Button onClick={handleOpenUpcoming}>Upcoming Sessions</Button>
                </ul>
            </nav>
        </header>
    )
}

export default Header;