import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../css/Navbar.css'
import logo from '../assets/logo_fintech.jpeg'
import sandwich from '../assets/sandwich.png'
import { React , useState }from "react";
import "../css/Button.css"


const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
      };
    let navigate = useNavigate();
    return ( 
        <div className="navWrapper">
            <img className="navbarIcon" alt="logo" src={logo} onClick={()=>navigate(`/`)}/>
            <nav className="navbar">
                <Link className="navLink default-button" to="/">主頁</Link>
                <Link className="navLink default-button" to="/loan-request">立即申請</Link>
                <Link className="navLink default-button" to="/mortgage-calculator">按揭計算器</Link>
            </nav>
            <img className="nav-sandwish" alt="logo" src={sandwich} onClick={handleClick}/>
            <div className={isActive?"nav-list show":"nav-list"}>
                <Link className="nav-list-Link default-button" to="/">主頁</Link>
                <Link className="nav-list-Link default-button" to="/loan-request">立即申請</Link>
                <Link className="nav-list-Link default-button" to="/mortgage-calculator">按揭計算器</Link>
            </div>
        </div>

     );
}
 
export default Navbar;