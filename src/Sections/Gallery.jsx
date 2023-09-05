import React, { useState } from 'react';
import styles from '../assets/styles/Gallery.css'
import ImageUpload from './Components/ImageUpload';
import ImageContainer from './Components/ImageContainer';

const Gallery = ({ admin }) => {
    const [uploadCard, setUploadCard] = useState(false)
    const [rerender, setRerender] = useState(false)
    
    const toggleUploadCard = () => {
        setUploadCard(!uploadCard)
    }

    const triggerRender = () => {
        setRerender(!rerender)
    }

    return (

        <div style={styles} className='gallery'>
            { uploadCard ? <ImageUpload closeCard={toggleUploadCard} triggerRender={triggerRender} /> : null}

            <button style={{display: `${admin ? 'block' : 'none'}`}} onClick={toggleUploadCard} className="ui icon inverted pink button uplbtn">
                <i className="upload icon"></i>
            </button>

            <ImageContainer rerender={rerender} admin={admin}/>
        </div>
    )
}

export default Gallery;