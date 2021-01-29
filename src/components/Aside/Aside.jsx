import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './Aside.css';

export default function Aside({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <div className="aside">
            <div className="aside-logo">
                <h1>BTLT LOGO</h1> 
                <small><small><span>BETTER THAN LAST TIME</span></small></small>
                <hr/>
            </div>
            <div className="aside-nav">
                <Link exact to="/"> <button>Exercise Log</button> </Link>
                <Link exact to="/exercises"><button>Exercises</button></Link>
                <Link exact to="/new-log"> <button> New Log </button></Link>
                <Link exact to="/new-exercise"><button> New Exercise</button> </Link>
            </div>
            <div className="aside-logout">
                <span><strong id="name"> Hi, {user.name}!</strong></span><br/>
                <span>{user.email}</span>
                <Link to="" onClick={handleLogOut}> <button className="logout">Log Out</button> </Link> 
            </div>
        </div>

    );
}

