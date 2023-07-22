import React from "react";
import styles from '../assets/styles/Footer.css'

const Footer = () => {
    return (
        <footer style={styles}>
            <div className="links">
                <h2>დაგვიკავშირდით:</h2>
                <ul>
                    <li><i class="phone icon"></i> +995 599 18 44 13</li>
                    <li><a href="https://www.facebook.com/lollipopsstudiorustavi" target="_blank"><i class="facebook icon"></i> @lollipopsstudiorustavi</a></li><li><a href="https://www.instagram.com/photo_studio_lollipops/" target="_blank"><i class="instagram icon"></i> @photo_studio_lollipops</a></li>
                </ul>
            </div>
            <div className="location">
                <a href="https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Footer%2Flocation.png?alt=media&token=92c52abb-3088-4bb6-ad18-4d89bb1de908" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Footer%2Flocation.png?alt=media&token=92c52abb-3088-4bb6-ad18-4d89bb1de908" alt="Image not found" /></a>
                <p>ქალაქ რუსთავი, მესხიშვილის 9</p>
            </div>
            <div className="credit">
                Tuxa4Life © | <a style={{color: 'unset'}} href="https://github.com/Tuxa4Life" target="_blank"><i class="github icon"></i></a>
            </div>
        </footer>
    )
}

export default Footer;