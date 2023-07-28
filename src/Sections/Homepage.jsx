import React, { useState, useEffect } from "react";
import styles from '../assets/styles/Homepage.css'
import HomeImages from "./Components/HomeImages";
import { db } from "../firebase";
import {collection, getDocs } from 'firebase/firestore'
import EditValues from "./Components/EditValues";

const Homepage = ({ admin }) => {    
    const [values, setValues] = useState([])
    const [edit, setEdit] = useState('none')
    const [editPanel, setEditPanel] = useState(false)

    const [editVal, setEditVal] = useState(null)
    const [editId, setEditId] = useState(null)

    const valuesRef = collection(db, 'homepage')
    useEffect(() => {
        const getValues = async () => {
            const data = await getDocs(valuesRef)
            
            setValues(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }

        if (admin) {
            setEdit('inline')
        } else {
            setEdit('none')
        }

        getValues()
    }, [admin])

    const toggleEditPanel = (val, id) => {
        setEditVal(val)
        setEditId(id)
        setEditPanel(!editPanel)
    }   

    return (
        <main style={styles} className="home">

            { editPanel ? <EditValues oldData={editVal} closeCard={() => setEditPanel(false)} id={editId}/> : null }

            <section className="first-row">
                <div className="header">
                    <h1>{values.length ? values[0].title : ''} <em onClick={() => toggleEditPanel(values.length ? values[0].title : '', values[0].id)} style={{display: edit}}><i className="edit icon"></i></em></h1>
                    <h3>{values.length ? values[1].title : ''} <em onClick={() => toggleEditPanel(values.length ? values[1].title : '', values[1].id)} style={{display: edit}}><i className="edit icon"></i></em></h3>
                </div>
                <div className="images">
                    <HomeImages />
                </div>
            </section>

            <section className="second-row">
                <h2>{values.length ? values[2].title : ''} <em onClick={() => toggleEditPanel(values.length ? values[2].title : '', values[2].id)} style={{display: edit}}><i className="edit icon"></i></em></h2>
                <p>{values.length ? values[3].title : ''} <em onClick={() => toggleEditPanel(values.length ? values[3].title : '', values[3].id)} style={{display: edit}}><i className="edit icon"></i></em></p>
            </section>

            <section className="third-row">
                <h2>{values.length ? values[4].title : ''} <em onClick={() => toggleEditPanel(values.length ? values[4].title : '', values[4].id)} style={{display: edit}}><i className="edit icon"></i></em></h2>
                <div className="icon-wrapper">
                    <div className="item-one">
                        <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Homepage%2F1391391.png?alt=media&token=be578ea8-eedb-4675-94a1-a14d2b528733" alt="Image not found" />
                        <p>{values.length ? values[5].title : ''} <em onClick={() => toggleEditPanel(values.length ? values[5].title : '', values[5].id)} style={{display: edit}}><i className="edit icon"></i></em></p>
                    </div>
                    <div className="item-two">
                        <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Homepage%2Fcozy-icon-12.png?alt=media&token=bbbc9ebc-e567-443a-b35b-4d86d11d954d" alt="Image not found" />
                        <p>{values.length ? values[6].title : ''} <em onClick={() => toggleEditPanel(values.length ? values[6].title : '', values[6].id)} style={{display: edit}}><i className="edit icon"></i></em></p>
                    </div>
                    <div className="item-three">
                        <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Homepage%2Fcamera-removebg-preview.png?alt=media&token=5ba14d03-25b0-49cd-b673-6b803b6eba12" alt="" />
                        <p>{values.length ? values[7].title : ''}  <em onClick={() => toggleEditPanel(values.length ? values[7].title : '', values[7].id)} style={{display: edit}}><i className="edit icon"></i></em></p>
                    </div>
                </div>
            </section>

            <section className="image-container">
                <h2>{values.length ? values[8].title : ''} <em onClick={() => toggleEditPanel(values.length ? values[8].title : '', values[8].id)} style={{display: edit}}><i className="edit icon"></i></em></h2>
                <div className="first-images img-wrapper">
                    <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Homepage%2FGallery%2F1%20(1).jpg?alt=media&token=33cc4e14-85ac-4b90-8c5a-1726e88104a0" alt="Image not found" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Homepage%2FGallery%2F2%20(1).jpg?alt=media&token=649a4d41-6ecc-4ac2-b03b-d0fac4d4381e" alt="Image not found" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Homepage%2FGallery%2F3.jpg?alt=media&token=c83a921b-1e7e-44aa-aa7b-a48157f30d1b" alt="Image not found" />
                </div>
                <div className="second-images img-wrapper">
                    <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Homepage%2FGallery%2F4.jpg?alt=media&token=f534f41a-2fd4-4091-a523-fa81188adb1f" alt="Image not found" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Homepage%2FGallery%2F5.jpg?alt=media&token=e422e76b-7e46-48a8-9510-1b60d57ce9e9" alt="Image not found" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-rustavi.appspot.com/o/Homepage%2FGallery%2F6.jpg?alt=media&token=c359f57d-00fa-4031-ad6e-65299cbcc6db" alt="Image not found" />
                </div>
            </section>
        </main>
    )
}

export default Homepage;