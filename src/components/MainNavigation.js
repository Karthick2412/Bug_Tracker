import './MainNavigation.css'
import { NavLink } from "react-router-dom";

function MainNavigation(){
    return(
        <>
        <header >
        <nav>
            <div className="sidebar">
            <ul>
                <li>
                <NavLink to="/" end>DashBoard</NavLink>
                </li>
                <li>
                <NavLink to="/users" >Manage User</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/tickets">Tickets</NavLink>
                </li>
                <li>
                    <NavLink to="/projectHistory">Project History</NavLink>
                </li>
            </ul>
            </div>
        </nav>
        </header>
        </>
    );
}

export default MainNavigation;