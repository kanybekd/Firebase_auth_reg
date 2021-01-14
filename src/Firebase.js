import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyC6P4Man-AIstoHXH-qtzuubpu2B0FNGyM",
    authDomain: "spa-react-73ce1.firebaseapp.com",
    databaseURL: "https://spa-react-73ce1-default-rtdb.firebaseio.com",
    projectId: "spa-react-73ce1",
    storageBucket: "spa-react-73ce1.appspot.com",
    messagingSenderId: "462715119404",
    appId: "1:462715119404:web:cfaac5ab0a4b1b2973ee89",
    measurementId: "G-3FCMY9PRNS"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth()

export default firebase;