import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
 
const firebaseConfig = {
    apiKey: "AIzaSyAh0dp5xxaGTNBjN4S2Odu2ftWd0GRaTkA",
    authDomain: "lollipops-14.firebaseapp.com",
    projectId: "lollipops-14",
    storageBucket: "lollipops-14.appspot.com",
    messagingSenderId: "888614994088",
    appId: "1:888614994088:web:55ba233a5d48c328e1429d"
};
const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)