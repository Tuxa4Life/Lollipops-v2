import React, { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore'
import { db } from "../../firebase";

const EditValues = ({ oldData, closeCard, id, parentId, rerender }) => {
    const [inputVal, setInputVal] = useState(oldData)
    const [isLoading, setIsLoading] = useState(false)

    const updateValue = (e) => {
        e.preventDefault()

        const docRef = doc(db, parentId, id)
        setIsLoading(true)
        
        updateDoc(docRef, {
            val: inputVal
        }).then(() => {
            setIsLoading(false)
            closeCard()
            rerender()
        })
    }
    
    return (
        <form style={{
            position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '300px', background: 'white', display: 'flex', flexDirection: 'column', zIndex: '7',
            padding: '10px', border: '1px black solid', borderRadius: '5px'
        }} onSubmit={updateValue}>
            <div className="ui input">
                <textarea type="text" style={{width: '300px', height: '300px', border: '1px black solid'}} value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            </div>

            <div className="buttons" style={{
                marginTop: '10px', display: 'flex', justifyContent: 'right'
            }}>
                <button type='submit' className={`ui primary button ${isLoading ? 'loading' : ''}`}>Save</button>
                <button type='button' onClick={closeCard} className="ui button">Cancel</button>
            </div>
        </form>
    )
}

export default EditValues;