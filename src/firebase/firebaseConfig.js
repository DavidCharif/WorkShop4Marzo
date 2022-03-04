import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy-vCcmDVatuty8ESNaTWpiNSvSljyU7U",
  authDomain: "demomarzo4.firebaseapp.com",
  projectId: "demomarzo4",
  storageBucket: "demomarzo4.appspot.com",
  messagingSenderId: "439508548907",
  appId: "1:439508548907:web:0da71697e6c1eb95c4d96e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    db
}