import React from 'react';
import styles from './Footer.module.css'



const Footer = () =>{
    return(
        <footer className="pad">
             <div className={styles.moreinfo}>
          <div>
              <h3>follow Us</h3>
              <p><a href="http://instagram.com">Instagram</a></p>
              <p><a href="http://twitter.com">Twitter</a></p>
              <p><a href="http://facebook.com">Facebook</a></p>
              <p><a href="http://youtube.com">Youtube</a></p>
          </div>
          <div>
              <h3>Links</h3>
              <p><a href="index.html">Book</a></p>
              <p><a href="index.html">Delivery</a></p>
              <p><a href="index.html">Contact</a></p>

          </div>
          <div className={styles.footeraddress}>
              <h3>Venue</h3>
              <p>200, D-block, Mofuneto USA</p>
              <p>dontcheck.com</p>
              <p>0273537653</p>
          </div>
         

      </div>
      <hr/>
          <div className={styles.cpr}>
          <p id="copyright"> &copy; 2020 All rights reserved </p>
      </div>
            


        </footer>
    )
}
export default Footer;