import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCRZ_2VKxggW6AHmnYsgBCpsvGgrFL9oWE",
  authDomain: "chatapp-64c32.firebaseapp.com",
  projectId: "chatapp-64c32",
  storageBucket: "chatapp-64c32.appspot.com",
  messagingSenderId: "1033668835002",
  appId: "1: 1033668835002: web: db821636e648509033f483",
  measurementId: "G-GG9ZNB75QZ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
