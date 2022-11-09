import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfrCrPhz0VPpIm4CjTkkdPfWFeL_HBjOY",
  authDomain: "utube-clone-3d3fa.firebaseapp.com",
  projectId: "utube-clone-3d3fa",
  storageBucket: "utube-clone-3d3fa.appspot.com",
  messagingSenderId: "981867004117",
  appId: "1:981867004117:web:127b9cc42d5b44883ee25c",
  measurementId: "G-P27N0ZB9EW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
