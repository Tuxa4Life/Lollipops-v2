import React, { useState } from "react";
import styles from '../assets/styles/Navbar.css'


const Navbar = () => {
    const [menu, setMenu] = useState(false)
    
    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav style={styles}>
            <div className="img">
                <img src={'https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Logos%2Flogo.png?alt=media&token=ef32bceb-685c-42e7-ad5c-009927ec4427'} alt="Loading..." />
            </div>

            <div className="alt">
                <p>მთავარი</p>
                <p>ფასები</p>
                <p>გალერეა</p>
                <i className="user icon"></i>
            </div>

            <i onClick={toggleMenu} className="bars icon"></i>

            <div className={`menu ${menu ? 'openMenu' : 'closeMenu'}`}>
                <i onClick={toggleMenu} className="close icon"></i>
                <ul>
                    <li>მთავარი</li>
                    <li>ფასები</li>
                    <li>გალერეა</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;