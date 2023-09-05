import React, { useState } from "react";
import { storage } from '../../firebase'
import { deleteObject, ref } from "firebase/storage";

const Image = ({url, admin}) => {
    const [isDelete, setIsDelete] = useState(false)

    const deleteImg = () => {
        const imgRef = ref(storage, url)

        deleteObject(imgRef).then(() => {
            setIsDelete(true)
        }).catch((error) => {
            alert(error)
        })
    }

    return (
        <div style={{display: `${isDelete ? 'none' : 'block'}`}} className="img-wrapper">
            <img className="column ui bordered image" src={url} />
            <i onClick={deleteImg} style={{display: `${admin ? 'block' : 'none'}`}} class="times icon"></i>
        </div>
    )
}

export default Image;