import React, { useState, useEffect } from "react";
import { storage } from '../firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import styles from '../assets/styles/Navbar.css'


const Navbar = () => {
    const [logo, setLogo] = useState('')
    
    const imageListRef = ref(storage, 'Logos/')
    useEffect(() => {
        listAll(imageListRef).then(
            (response) => {
                response.items.forEach(item => {
                    getDownloadURL(item).then(url => {
                        setLogo(url)
                    })
                })
            }
        )
    }, [])

    return (
        <nav style={styles}>
            <div className="img">
                <img src={logo} alt="Loading..." />
            </div>

            <div className="alt">
                <p>კონტაქტი</p>
                <p>ლოკაცია</p>
                <p>T: 599 752 777</p>
            </div>
        </nav>
    )
}

export default Navbar;