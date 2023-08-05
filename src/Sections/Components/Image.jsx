import React from "react";

const Image = ({url}) => {
    return <img style={{cursor: 'pointer', objectFit: 'cover'}} className="column ui bordered image" src={url} />
}

export default Image;