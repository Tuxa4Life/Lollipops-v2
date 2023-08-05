import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore' 
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBHc3YKk9nghuOTs1PSggOQ9Fbt4YJRVb8",
    authDomain: "lollipops-rustavi.firebaseapp.com",
    projectId: "lollipops-rustavi",
    storageBucket: "lollipops-rustavi.appspot.com",
    messagingSenderId: "568260549407",
    appId: "1:568260549407:web:7e080255435d86165cae2a"
  };
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const storage = getStorage(app)