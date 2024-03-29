import React, { useState } from "react";
import styles from '../assets/styles/Footer.css'
import PopupImg from "./Components/PopupImg";

const Footer = () => {
    const [popup, setPopup] = useState(false)

    
    return (
        <footer style={styles}>
            { popup ? <PopupImg src={'https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Footer%2FLocation.jpg?alt=media&token=929552e1-ef88-421b-8286-8627e4dfc894'} closePopup={() => setPopup(false)}/> : null }

            <div className="links">
                <h2>დაგვიკავშირდით:</h2>
                <ul>
                    <li><i className="phone icon"></i> +995 599 18 44 13</li>
                    <li><a href="https://www.facebook.com/lollipopsstudiorustavi" target="_blank"><i className="facebook icon"></i> <span style={{textDecoration: 'underline'}}>@lollipopsstudiorustavi</span></a></li><li><a href="https://www.instagram.com/photo_studio_lollipops/" target="_blank"><i className="instagram icon"></i><span style={{textDecoration: 'underline'}}>@photo_studio_lollipops</span></a></li>
                </ul>
            </div>
            <div className="location">
                <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Footer%2FLocation.jpg?alt=media&token=929552e1-ef88-421b-8286-8627e4dfc894" alt="Image not found" onClick={() => setPopup(true)}/>
                <p>ქალაქ რუსთავი, მესხიშვილის 9დ</p>
            </div>
            <div className="credit">
                Tuxa4Life © | <a style={{color: 'unset'}} href="https://github.com/Tuxa4Life" target="_blank"><i className="github icon"></i></a>
            </div>
        </footer>
    )
}

export default Footer;