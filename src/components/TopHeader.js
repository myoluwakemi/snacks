import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import './TopHeader.css'



const TopHeader = () =>{
    return(
        <div className="topHeader pad">
            <div className="phoneNum">
            <span>038387647</span>
            </div>
            <div className="social_icon">
                <ul className="social_icons">
                    <li className="icon">
                    <a href="http://instagram.com">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    </li>
                    <li className="icon">
                        <a href="http://facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>
                    </li>
                    <li className="icon">
                        <a href="http://twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
                    </li>

                </ul>
            </div>



        </div>

    )

}
export default TopHeader