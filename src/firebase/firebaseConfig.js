import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCvhsu5i046oAs1IeTpIHbvS3ETD3fe6ag",
    authDomain: "prueba-72a26.firebaseapp.com",
    databaseURL: "https://prueba-72a26.firebaseio.com",
    projectId: "prueba-72a26",
    storageBucket: "prueba-72a26.appspot.com",
    messagingSenderId: "445936723060",
    appId: "1:445936723060:web:9eeab89fa8d9d557a79d21"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}