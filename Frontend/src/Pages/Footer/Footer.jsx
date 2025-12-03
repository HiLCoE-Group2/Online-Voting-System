import React from 'react';
import './Footer.css';

function Footer(){
    return(
       <section className="copyright">
      <footer>
        <ul>
          <li>&copy; 2025 EthioVote</li>
          <li>
            <i className="fas fa-landmark"></i> 2025 National Election Board of Ethiopia
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <a href="mailto:Voterinfo@ehtiovote.et">Voterinfo@ehtiovote.et</a>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <a href="tel:6890">6890</a>
          </li>
        </ul>
      </footer>
    </section>
    );
}
export default Footer;