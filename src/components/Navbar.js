import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../css/Navbar.css'
import logo from '../assets/logo_fintech.jpeg'
import sandwich from '../assets/sandwich.png'
import { React , useState }from "react";
const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
      };
    let navigate = useNavigate();
    return ( 
        <div className="navWrapper">
            <img className="navbarIcon" src={logo} onClick={()=>navigate(`/`)}/>
            <nav className="navbar">
                <Link className="navLink" to="/">主頁</Link>
                <Link className="navLink" to="/LoanRequest">立即申請</Link>
                <Link className="navLink" to="/MortgageCalculator">按揭計算器</Link>
                <Link className="navLink" to="/PersonalLoanCalculator">個人貸款計算器</Link>
            </nav>
            <img className="nav-sandwish" src={sandwich} onClick={handleClick}/>
            <div className={isActive?"nav-list show":"nav-list"}>
                <Link className="nav-list-Link" to="/">主頁</Link>
                <Link className="nav-list-Link" to="/LoanRequest">立即申請</Link>
                <Link className="nav-list-Link" to="/MortgageCalculator">按揭計算器</Link>
                <Link className="nav-list-Link" to="/PersonalLoanCalculator">個人貸款計算器</Link>
            </div>
        </div>

     );
}
 
export default Navbar;