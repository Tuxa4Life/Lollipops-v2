import React, { useState } from "react";
import styles from '../assets/styles/Navbar.css'
import AdminPanel from "./Components/AdminPanel";


const Navbar = ({ setAdmin }) => {
    const [menu, setMenu] = useState(false)
    const [adminPanel, setAdminPanel] = useState(false)
    
    const toggleMenu = () => {
        setMenu(!menu)
    }

    const toggleAdminPanel = () => {
        setAdminPanel(!adminPanel)
    }

    return (
        <nav style={styles}>
            <div className="img">
                <img src={'https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Nav%2Flogo.png?alt=media&token=b16e5579-9ed0-4885-86c3-a7ee3a3c1bfc'} alt="Loading..." />
            </div>

            <div className="alt">
                <p>მთავარი</p>
                <p>ფასები</p>
                <p>გალერეა</p>
                <i onClick={toggleAdminPanel} className="user icon"></i>
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
            {
                adminPanel ? <AdminPanel setAdmin={setAdmin} closeAdminPanel={() => setAdminPanel(false)}/> : null
            }
        </nav>
    )
}

export default Navbar;