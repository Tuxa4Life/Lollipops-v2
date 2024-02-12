import React, { useState } from "react";
import styles from '../assets/styles/Navbar.css'
import AdminPanel from "./Components/AdminPanel";
import Link from './Routes/Link';

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
                <p><Link href={'/'}>მთავარი</Link></p>
                <p><Link href={'/prices'}>ფასები</Link></p>
                <p><Link href={'/gallery'}>გალერეა</Link></p>
                <p><Link href={'/albums'}>ალბომები</Link></p>
                <i onClick={toggleAdminPanel} className="user icon"></i>
            </div>

            <i onClick={toggleMenu} className="bars icon"></i>

            <div className={`menu ${menu ? 'openMenu' : 'closeMenu'}`}>
                <i onClick={toggleMenu} className="close icon"></i>
                <ul>
                    <li><Link href={'/'}>მთავარი</Link></li>
                    <li><Link href={'/prices'}>ფასები</Link></li>
                    <li><Link href={'/gallery'}>გალერეა</Link></li>
                    <li><Link href={'/albums'}>ალბომები</Link></li>
                </ul>
            </div> 
            {
                adminPanel ? <AdminPanel setAdmin={setAdmin} closeAdminPanel={() => setAdminPanel(false)}/> : null
            }
        </nav>
    )
}

export default Navbar;