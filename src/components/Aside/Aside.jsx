import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './Aside.css';
import logo from '../../logos/logo2.png';

export default function Aside({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <div className="aside">
            <div className="aside-logo">
                <img id="nav" src={logo} alt="btlt-logo"/>
                <hr/>
            </div>
            <div className="aside-nav">
                <Link exact to="/new-log"> <button id="nav-btn"> NEW LOG </button></Link>
                <Link exact to="/logs"> <button id="nav-btn">EXERCISE LOGS</button> </Link>
                <Link exact to="/exercises"><button id="nav-btn">EXERCISES</button></Link>
                <Link exact to="/new-exercise"><button id="nav-btn"> NEW EXERCISE</button> </Link>
            </div>
            <div className="aside-logout">
                <span><strong id="name"> Hi, {user.name}!</strong></span><br/>
                <span>{user.email}</span>
                <Link to="" onClick={handleLogOut}> <button className="logout">LOG OUT</button> </Link> 
            </div>
        </div>

    );
}

