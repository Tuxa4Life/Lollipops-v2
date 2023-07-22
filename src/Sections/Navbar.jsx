import React from "react";
import styles from '../assets/styles/Navbar.css'


const Navbar = () => {

    return (
        <nav style={styles}>
            <div className="img">
                <img src={'https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Logos%2Flogo.png?alt=media&token=ef32bceb-685c-42e7-ad5c-009927ec4427'} alt="Loading..." />
            </div>

            <div className="alt">
                <i className="user icon"></i>
            </div>
        </nav>
    )
}

export default Navbar;