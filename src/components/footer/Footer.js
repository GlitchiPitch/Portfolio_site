import "./style.css"

import github from "./../../img/icons/github-svgrepo-com.svg"
import facebook from "./../../img/icons/facebook-3-logo-svgrepo-com.svg"
import twitter from "./../../img/icons/twitter-3-logo-svgrepo-com.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={github} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={facebook} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>2022</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;