import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhnNKbhJa3ChBOClV8rzGja6tYAdxROok",
    authDomain: "clone-a608b.firebaseapp.com",
    databaseURL: "https://clone-a608b.firebaseio.com",
    projectId: "clone-a608b",
    storageBucket: "clone-a608b.appspot.com",
    messagingSenderId: "13658346668",
    appId: "1:13658346668:web:a6fdd1a7bfa9ce7ce8fb09",
    measurementId: "G-2M33CZR87V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };