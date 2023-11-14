import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6FTsrfFAqAK1ha01asRsk0oSypnXEmPs",
  authDomain: "lamiun.firebaseapp.com",
  projectId: "lamiun",
  storageBucket: "lamiun.appspot.com",
  messagingSenderId: "494345546843",
  appId: "1:494345546843:web:126dfe6fbfbabf13e0237e",
  measurementId: "G-4TJ0ZL63JY",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
