import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../css/Navbar.css'
import logo from '../assets/logo_fintech.jpeg'
const Navbar = () => {

    let navigate = useNavigate();
    return ( 
        <div className="navWrapper">
            <img className="navbarIcon" src={logo} onClick={()=>navigate(`/`)}/>
            <nav className="navbar">
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/LoanRequest">LoanRequest</Link>
                <Link className="navLink" to="/MortgageCalculator">MortgageCalculator</Link>
                <Link className="navLink" to="/PersonalLoanCalculator">PersonalLoanCalculator</Link>
            </nav>
        </div>

     );
}
 
export default Navbar;