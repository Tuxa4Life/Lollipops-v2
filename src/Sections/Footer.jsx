import React from "react";
import styles from '../assets/styles/Footer.css'

const Footer = () => {
    return (
        <footer style={styles}>
            <div className="links">
                <h2>დაგვიკავშირდით:</h2>
                <ul>
                    <li><i className="phone icon"></i> +995 599 18 44 13</li>
                    <li><a href="https://www.facebook.com/lollipopsstudiorustavi" target="_blank"><i className="facebook icon"></i> <span style={{textDecoration: 'underline'}}>@lollipopsstudiorustavi</span></a></li><li><a href="https://www.instagram.com/photo_studio_lollipops/" target="_blank"><i className="instagram icon"></i><span style={{textDecoration: 'underline'}}>@photo_studio_lollipops</span></a></li>
                </ul>
            </div>
            <div className="location">
                <a href="https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Footer%2FLocation.jpg?alt=media&token=63f8c28e-fde5-4557-8d9f-10ea652d6c50" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Footer%2FLocation.jpg?alt=media&token=63f8c28e-fde5-4557-8d9f-10ea652d6c50" alt="Image not found" /></a>
                <p>ქალაქ რუსთავი, მესხიშვილის 9</p>
            </div>
            <div className="credit">
                Tuxa4Life © | <a style={{color: 'unset'}} href="https://github.com/Tuxa4Life" target="_blank"><i className="github icon"></i></a>
            </div>
        </footer>
    )
}

export default Footer;