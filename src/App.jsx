import React, { useState } from "react";
import styles from './assets/styles/App.css'

import Navbar from "./Sections/Navbar";
import Homepage from "./Sections/Homepage";
import Footer from "./Sections/Footer";
import Route from "./Sections/Routes/Route";


const App = () => {
    const [admin, setAdmin] = useState(false)

    return (
        <div style={ styles }>
            <Navbar setAdmin={setAdmin}/>

            <Route path={'/'}>
                <Homepage admin={admin}/>
            </Route>

            <Route path={'/prices'}>
                
            </Route>

            <Route path={'/gallery'}>
                
            </Route>

            <Footer />
        </div>
    )
}

export default App;