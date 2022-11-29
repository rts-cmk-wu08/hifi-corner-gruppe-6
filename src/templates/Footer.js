import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faSquareInstagram, faSquareTwitter, faSquareYoutube } from '@fortawesome/free-brands-svg-icons'
 
const Footer = () => {
  return (
    <footer>
      <section className="upperFooter">
        <nav className="upperFooterLeft">
          <div>Returns & Refunds</div>
          <div>Delivery</div>
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
        </nav>
        <nav className="upperFooterMiddle">
          <h2>Contact</h2>
          <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
          <p>0131 556 7901</p>
          <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
          <p>01324 629 011</p>
          <p>
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faSquareInstagram} />
            <FontAwesomeIcon icon={faSquareTwitter} />
            <FontAwesomeIcon icon={faSquareYoutube} />
          </p>
        </nav>
        <nav className="upperFooterRight"></nav>
      </section>
      <hr className="footerDivider" />
      <section className="lowerFooter">
        <nav className="lowerFooterPay"></nav>
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
