import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyA-FrkCRPMY83SjfZnrk7bBguQmpdpjeEI",
  authDomain: "parqfast-1841f.firebaseapp.com",
  projectId: "parqfast-1841f",
  storageBucket: "parqfast-1841f.appspot.com",
  messagingSenderId: "994100265410",
  appId: "1:994100265410:web:57d9ce1ee673162991d65b",
  measurementId: "G-W2J132BVR7",
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
