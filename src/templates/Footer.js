import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faSquareInstagram, faSquareTwitter, faSquareYoutube, faStripe, faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons'
 
const Footer = () => {
  return (
    <footer>
      <section className="upperFooter">
        <nav className="upperFooterLeft">
          <div>Home</div>
          <div>Shop</div>
          <div>About Us</div>
        </nav>
        <nav className="upperFooterMiddle">
        <div>Returns & Refunds</div>
          <div>Delivery</div>
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
        </nav>
        <nav className="upperFooterRight">
        <h2>Contact</h2>
          <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
          <p > <FontAwesomeIcon icon={faPhone} className="footerSmallIcon"/>0131 556 7901</p>
          <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
          <p><FontAwesomeIcon icon={faPhone} className="footerSmallIcon"/>01324 629 011</p>
          <p>
            <FontAwesomeIcon icon={faSquareFacebook} className="footerSmallIcon"/>
            <FontAwesomeIcon icon={faSquareInstagram} className="footerSmallIcon"/>
            <FontAwesomeIcon icon={faSquareTwitter} className="footerSmallIcon"/>
            <FontAwesomeIcon icon={faSquareYoutube} className="footerSmallIcon"/>
          </p>
        </nav>
      </section>
      <hr className="footerDivider" />
      <section className="lowerFooter">
        <nav className="lowerFooterPay">
        <FontAwesomeIcon icon={faStripe} className="footerBigIcon"/>
        <FontAwesomeIcon icon={faCcVisa} className="footerBigIcon"/>
        <FontAwesomeIcon icon={faCcMastercard} className="footerBigIcon"/>
        </nav>
        <p className="lowerFooterAddress">
          Hi Fi Corner (Edinburgh) Ltd is registered in Scotland. No: SC049298.
          Registered office: 2 Joppa Rd, Edinburgh EH15 2EU
        </p>
        <p className="lowerFooterAuthor">Designed & Built by ????</p>
      </section>
    </footer>
  );
};

export default Footer;
