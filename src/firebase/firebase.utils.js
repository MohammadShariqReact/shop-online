import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBYRfSklzf56t9PzPf40Gddqkg6xwrpvx4",
    authDomain: "shop-online-4b681.firebaseapp.com",
    databaseURL: "https://shop-online-4b681.firebaseio.com",
    projectId: "shop-online-4b681",
    storageBucket: "shop-online-4b681.appspot.com",
    messagingSenderId: "893415632278",
    appId: "1:893415632278:web:db9e7b3f6a7f2d79c281b7",
    measurementId: "G-XCJV1BSSJP"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;


