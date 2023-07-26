import React from "react";
import styles from '../assets/styles/Homepage.css'
import HomeImages from "./Components/HomeImages";

const Homepage = () => {

    return (
        <main style={styles} className="home">
            <section className="first-row">
                <div className="header">
                    <h1>Lollipops</h1>
                    <h3>ჩვენ ვქმნით მოგონებებს მომავლისთვის</h3>
                </div>
                <div className="images">
                    <HomeImages />
                </div>
            </section>

            <section className="second-row">
                <h2>რას გთავაზობთ?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum optio debitis  quidem saepe consequatur!</p>
            </section>

            <section className="third-row">
                <h2>უპირატესობები</h2>
                <div className="icon-wrapper">
                    <div className="item-one">
                        <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Homepage_Images%2F1391391.png?alt=media&token=60745d1c-f367-4643-99a8-c4fceb6653bf" alt="Image not found" />
                        <p>თანამედროვე აღჭურვილობა</p>
                    </div>
                    <div className="item-two">
                        <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Homepage_Images%2Fcozy-icon-12.png?alt=media&token=cad7f451-d8fa-41d9-bf6a-51be9b31376b" alt="Image not found" />
                        <p>მყუდრო გარემო</p>
                    </div>
                    <div className="item-three">
                        <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Homepage_Images%2Fcamera-removebg-preview.png?alt=media&token=8c208ef6-96a5-44ed-9b9a-ac521781ab98" alt="" />
                        <p>სწრაფი და ხარისხიანი ფოტოსესია</p>
                    </div>
                </div>
            </section>

            <section className="image-container">
                <h2>რამდენიმე ფოტო გალერეადან</h2>
                <div className="first-images img-wrapper">
                    <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Homepage_Images%2FGallery%20Images%2F1.jpg?alt=media&token=3cf51af7-7bad-4fbe-8350-7bdff73a4d19" alt="Image not found" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Homepage_Images%2FGallery%20Images%2F2.jpg?alt=media&token=41a98ab3-b5bf-4482-994e-b0f518444c8e" alt="Image not found" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Homepage_Images%2FGallery%20Images%2F3.jpg?alt=media&token=572e942d-c87c-461c-ba61-b6a6282fc31c" alt="Image not found" />
                </div>
                <div className="second-images img-wrapper">
                    <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Homepage_Images%2FGallery%20Images%2F4.jpg?alt=media&token=fb75040a-fc8b-461a-9db9-aa6f9828463d" alt="Image not found" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Homepage_Images%2FGallery%20Images%2F5.jpg?alt=media&token=9ba35514-a784-46a6-bbe3-465c77e93c9d" alt="Image not found" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/lollipops-14.appspot.com/o/Homepage_Images%2FGallery%20Images%2F6.jpg?alt=media&token=0ad5c478-cbc9-4d17-804c-aa56b7298320" alt="Image not found" />
                </div>
            </section>
        </main>
    )
}

export default Homepage;