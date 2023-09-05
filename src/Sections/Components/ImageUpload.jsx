import React, { useState } from "react";
import styles from '../../assets/styles/ImageUpload.css'
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid'

const ImageUpload = ({ closeCard, triggerRender }) => {
    const [files, setFiles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const uploadImage = () => {
        if (!files) return
        setIsLoading(true)

        for (let i = 0; i < files.length; i++) {
            const fileRef = ref(storage, `Gallery/${files[i].name}_${v4 ()}`)

            uploadBytes(fileRef, files[i]).then(() => {
                if (i === files.length - 1) {
                    setIsLoading(false)
                    closeCard()
                    triggerRender()
                }
            })
        }
    }

    return (
        <div style={styles} className="upload-card">
            <div className="field">
                <label htmlFor="upload">Upload file</label>
                <input onChange={e => setFiles(e.target.files)} className="custom-file-upload" type="file" name="upload" multiple/> 
            </div>
            <div className="buttons">
                <button onClick={uploadImage} className={`ui pink button ${isLoading ? 'loading disabled' : ''}`}>Upload</button>
                <button onClick={closeCard} className="ui button">Close</button>
            </div>
        </div>
    )
}

export default ImageUpload;