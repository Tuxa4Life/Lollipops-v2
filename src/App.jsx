import React, { useState } from "react";
import styles from './assets/styles/App.css'

import Navbar from "./Sections/Navbar";
import Homepage from "./Sections/Homepage";
import Footer from "./Sections/Footer";


const App = () => {
    const [admin, setAdmin] = useState(false)

    return (
        <div style={ styles }>
            <Navbar setAdmin={setAdmin}/>
            <Homepage admin={admin}/>
            <Footer />
        </div>
    )
}

export default App;