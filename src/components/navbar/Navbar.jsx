import react from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/list" className='navbar-links' >Exercises List</Link>
            <Link to="/create" className='navbar-links' >Create Exercise</Link>
            <Link to="/user" className='navbar-links' >Create User</Link>
        </div>
    )
}

export default Navbar;