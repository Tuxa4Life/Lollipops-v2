import React from "react";
import styles from './assets/styles/App.css'

import Navbar from "./Sections/Navbar";
import Homepage from "./Sections/Homepage";


const App = () => {
    return (
        <div style={ styles }>
            <Navbar />
            <Homepage />
        </div>
    )
}

export default App;