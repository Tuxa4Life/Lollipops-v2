import React, { useState, useEffect } from "react";
import Ei from "./Components/EditIcon";
import EditValues from "./Components/EditValues";
import { db } from "../firebase";
import {collection, getDocs } from 'firebase/firestore'

const Albums = ({ admin }) => {
    const [values, setValues] = useState([])

    const [editOpen, setEditOpen] = useState(false)
    const toggleEdit = () => setEditOpen(!editOpen)

    const [textId, setTextId] = useState('')
    const [pranetId, setParentId] = useState('')

    const [rerender, setRerender] = useState(false)

    const updateState = (text) => {
        setTextId(text)

        toggleEdit()
    }

    const valuesRef = collection(db, 'albums')
    useEffect(() => {
        const getValues = async () => {
            const data = await getDocs(valuesRef)
            
            setValues(data.docs.map(doc => ({...doc.data(), id: doc.id})))
            console.log(data.data)
        }

        getValues()
    }, [rerender])

    return (
        <div className="ui cards" style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            { editOpen ? <EditValues oldData={''} closeCard={toggleEdit} id={textId} parentId={'albums'} rerender={() => setRerender(!rerender)} /> : null }

            <div className="card" style={{width: '40%', minWidth: '300px', backgroundColor: 'rgb(247, 216, 255)', margin: '50px'}}>
                <div className="content">
                    <h1>ფასები</h1>
                    <div className="description">
                    {values.length ? values[0].val : ''} {admin ? <em onClick={() => { updateState( values[0].id) }}><i className="icon edit"></i></em> : null}
                    </div>
                    <div className="description">
                    {values.length ? values[1].val : ''} {admin ? <em onClick={() => { updateState( values[1].id) }}><i className="icon edit"></i></em> : null}
                    </div>
                    <div className="description">
                    {values.length ? values[2].val : ''} {admin ? <em onClick={() => { updateState(  values[2].id) }}><i className="icon edit"></i></em> : null}
                    </div>
                    <div className="description">
                    {values.length ? values[3].val : ''} {admin ? <em onClick={() => { updateState( values[3].id) }}><i className="icon edit"></i></em> : null}
                    </div>
                    <div className="description">
                    {values.length ? values[4].val : ''} {admin ? <em onClick={() => { updateState( values[4].id) }}><i className="icon edit"></i></em> : null}
                    </div>
                </div>
            </div>

            <div className="card" style={{width: '40%', minWidth: '300px', backgroundColor: 'rgb(247, 216, 255)', margin: '50px'}}>
                <div className="content">
                    <h1>ყდები</h1>
                    <div className="description">
                    {values.length ? values[5].val : ''} {admin ? <em onClick={() => { updateState( values[5].id) }}><i className="icon edit"></i></em> : null}
                    </div>
                    <div className="description">
                    {values.length ? values[6].val : ''} {admin ? <em onClick={() => { updateState( values[6].id) }}><i className="icon edit"></i></em> : null}
                    </div>
                </div>
            </div>

            <div className="card" style={{width: '40%', minWidth: '300px', backgroundColor: 'rgb(247, 216, 255)', margin: '50px'}}>
                <div className="content">
                    <h1>დეტალები</h1>
                    <div className="description">
                    {values.length ? values[7].val : ''} {admin ? <em onClick={() => { updateState( values[7].id) }}><i className="icon edit"></i></em> : null}
                    </div>
                    <div className="description">
                    {values.length ? values[8].val : ''} {admin ? <em onClick={() => { updateState( values[8].id) }}><i className="icon edit"></i></em> : null}
                    </div>
                    <div className="description">
                    {values.length ? values[9].val : ''} {admin ? <em onClick={() => { updateState( values[9].id) }}><i className="icon edit"></i></em> : null}
                    </div>
                    <div className="description">
                    {values.length ? values[10].val : ''} {admin ? <em onClick={() => { updateState(  values[10].id) }}><i className="icon edit"></i></em> : null}
                    </div>
                    <div className="description">
                    {values.length ? values[11].val : ''} {admin ? <em onClick={() => { updateState( values[11].id) }}><i className="icon edit"></i></em> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Albums;