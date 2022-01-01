import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className='navbar'>
             <div className='nav-home'>
                <Link to="/">EXERCISE TRACKER</Link>

             </div>
            <Link to="/create">Create Exercises</Link>
            <Link to="/user">Create Users</Link>
        </div>
     );
}
 
export default Navbar;