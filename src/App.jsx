import React from "react";
import styles from './assets/styles/App.css'

import Navbar from "./Sections/Navbar";
import Homepage from "./Sections/Homepage";
import Footer from "./Sections/Footer";


const App = () => {
    return (
        <div style={ styles }>
            <Navbar />
            <Homepage />
            <Footer />
        </div>
    )
}

export default App;