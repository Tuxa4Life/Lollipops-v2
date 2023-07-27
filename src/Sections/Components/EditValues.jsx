import React, { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore'
import { db } from "../../firebase";

const EditValues = ({ oldData, closeCard, id }) => {
    const [inputVal, setInputVal] = useState(oldData)

    const updateValue = () => {
        const docRef = doc(db, 'homepage', id)
        
        updateDoc(docRef, {
            title: inputVal
        }).then(closeCard)
    }
    
    return (
        <div style={{
            position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '300px', background: 'white', display: 'flex', flexDirection: 'column', zIndex: '7',
            padding: '10px', border: '1px black solid', borderRadius: '5px'
        }}>
            <div className="ui input">
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            </div>

            <div className="buttons" style={{
                marginTop: '10px', display: 'flex', justifyContent: 'right'
            }}>
                <button onClick={updateValue} className="ui primary button">Save</button>
                <button onClick={closeCard} className="ui button">Cancel</button>
            </div>
        </div>
    )
}

export default EditValues;