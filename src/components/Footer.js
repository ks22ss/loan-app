import "../css/Footer.css"
import mail from "../assets/icons8-mail-144.png"
import phone from "../assets/icons8-phone-200.png"
import map from "../assets/icons8-google-maps-200.png"
import whatsapp from "../assets/icons8-whatsapp-200.png"

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer-content-box">
                <div className="contact-box">
                    <img src={map} alt="map"/>
                    <p>香港中環畢打街 20號會德豐大廈 4樓(港鐵中環站D1出口)</p>
                </div>
                <div className="contact-box">
                    <img src={phone} alt="phone"/>
                    <p>+852 2111 1211</p>
                </div>
                <div className="contact-box">
                    <img src={whatsapp} alt="whatsapp"/>
                    <p>+852 5595 6111</p>
                </div>
                <div className="contact-box">
                    <img src={mail} alt="mail"/>
                    <p>support@company.com</p>
                </div>
            </div>
            <div className="footer-content-box">
                <p>
                    放債人牌照號碼： 1234/2234
                </p>
                <p>
                    此網站並不是官方網站，本網站所列之資訊並不代表康業信貸有限公司。
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;