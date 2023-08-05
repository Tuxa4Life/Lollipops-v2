import React, { useState, useEffect } from "react";
import styles from '../assets/styles/Prices.css'
import { db } from "../firebase";
import {collection, getDocs } from 'firebase/firestore'
import EditValues from "./Components/EditValues";

const Prices = ({ admin }) => {
    const [wrap, setWrap] = useState('three')
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);


    useEffect(() => {
        setDeviceWidth(window.innerWidth)

        if (deviceWidth <= 750) {
            setWrap('one')
        } else {
            setWrap('three')
        }
    }, []);


    const [values, setValuesA] = useState([])
    const [edit, setEdit] = useState('none')
    const [editPanel, setEditPanel] = useState(false)

    const [editVal, setEditVal] = useState(null)
    const [editId, setEditId] = useState(null)

    const [rerender, setRerender] = useState(true)

    const valuesRef = collection(db, 'prices')
    useEffect(() => {
        const getValues = async () => {
            const data = await getDocs(valuesRef)
            
            setValuesA(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }

        if (admin) {
            setEdit('inline')
        } else {
            setEdit('none')
        }

        getValues()
    }, [admin, rerender])

    const toggleEditPanel = (val, id) => {
        setEditVal(val)
        setEditId(id)
        setEditPanel(!editPanel)
    }

    return (
        <div style={styles} className="container ui">
            { editPanel ? <EditValues rerender={() => setRerender(!rerender)} parentId={'prices'} oldData={editVal} closeCard={() => setEditPanel(false)} id={editId}/> : null }

            <div className={`ui ${wrap} column grid`}>
                <div className="column">
                    <div className="ui fluid card">
                        <div className="image">
                            <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Prices%2Fprices%20(1).jpg?alt=media&token=ef9f3ada-bce0-482c-a8ed-857313efc8c3" />
                        </div>
                        <div className="content">
                            <p className="header">{values.length ? values[0].val : ''} <em onClick={() => toggleEditPanel(values.length ? values[0].val : '', values[0].id)} style={{display: edit}}><i className="edit icon"></i></em></p>
                            <div className="subtext"></div>
                            <hr />
                            <p>{values.length ? values[1].val : ''} <em onClick={() => toggleEditPanel(values.length ? values[1].val : '', values[1].id)} style={{display: edit}}><i className="edit icon"></i></em></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui fluid card">
                        <div className="image">
                            <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Prices%2Fprices%20(2).jpg?alt=media&token=e222543c-5acd-4d88-89e6-e9af65f793ed" />
                        </div>
                        <div className="content">
                            <p className="header">{values.length ? values[2].val : ''} <em onClick={() => toggleEditPanel(values.length ? values[2].val : '', values[2].id)} style={{display: edit}}><i className="edit icon"></i></em></p>
                            <hr />
                            <p>{values.length ? values[3].val : ''} <em onClick={() => toggleEditPanel(values.length ? values[3].val : '', values[3].id)} style={{display: edit}}><i className="edit icon"></i></em></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui fluid card">
                        <div className="image">
                            <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Prices%2Fprices%20(3).jpg?alt=media&token=fd861ce9-e97c-4945-96db-1c890886fe5e" />
                        </div>
                        <div className="content">
                            <p className="header">{values.length ? values[4].val : ''} <em onClick={() => toggleEditPanel(values.length ? values[4].val : '', values[4].id)} style={{display: edit}}><i className="edit icon"></i></em></p>
                            <hr />
                            <p>{values.length ? values[5].val : ''} <em onClick={() => toggleEditPanel(values.length ? values[5].val : '', values[5].id)} style={{display: edit}}><i className="edit icon"></i></em></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices;