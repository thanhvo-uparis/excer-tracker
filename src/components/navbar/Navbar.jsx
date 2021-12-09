import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link className='navbar-links' to="/list" >Exercises List</Link>
            <Link className='navbar-links' to="/create" >Create Exercise</Link>
            <Link className='navbar-links' to="/user" >Create User</Link>
        </div>
    )
}

export default Navbar;