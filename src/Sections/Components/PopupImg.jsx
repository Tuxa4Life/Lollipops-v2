import React from "react";

const PopupImg = ({src, closePopup}) => {
    return (
        <img style={{maxWidth: '700px', minWidth: '310px', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} src={src} alt="popup image" onClick={closePopup} />
    )
}

export default PopupImg;