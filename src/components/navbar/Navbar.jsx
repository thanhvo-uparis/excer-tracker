import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/" >Exercises List</Link>
            <Link to="/create" >Create Exercise</Link>
            <Link to="/user" >Create Exercise</Link>
        </div>
    )
}

export default Navbar;