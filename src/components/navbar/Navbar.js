import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className='navbar'>
             <div className='nav-home'>
                <Link to="/">PapayaShop</Link>

             </div>
            <Link to="/papayes">Papayas</Link>
            <Link to="/stores">Stores</Link>
        </div>
     );
}
 
export default Navbar;