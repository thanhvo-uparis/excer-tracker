import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className='navbar'>
             <div className='nav-home'>
                 
                <Link to="/"><img className='payaye-logo' src="https://media.istockphoto.com/vectors/papaya-icon-flat-style-vector-id1025363076?k=20&m=1025363076&s=612x612&w=0&h=mFLDg79mn_5YlHhEYVjjh5-10YhinwwkXHzE_QaxnXI="></img></Link>

             </div>
            <Link to="/papayes">Papayas</Link>
            <Link to="/stores">Stores</Link>
        </div>
     );
}
 
export default Navbar;