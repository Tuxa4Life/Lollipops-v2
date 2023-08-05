import React, { useState, useEffect } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../firebase";

import styles from '../../assets/styles/ImageContainer.css'
import Image from "./Image";

const ImageContainer = ({ rerender }) => {
    const [imageUrls, setImageUrls] = useState([])

    const imagesListRef = ref(storage, "Gallery/")
    useEffect(() => {
        listAll(imagesListRef).then((response) => {
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImageUrls((prev) => [...prev, url])
            })
          })
        })

        return () => {
            setImageUrls([])
        }

      }, [rerender])

    return (
        <div styles={styles} className="ui three column grid imagecontainer">
            {imageUrls.map((url, i) => {
                return <Image key={i} url={url}/>
            })}
        </div>
    )
}

export default ImageContainer