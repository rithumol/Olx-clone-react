import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtTyLkDATw5BXoi4F0O-Ii_hw5Z6vVd10",
  authDomain: "fir-93f02.firebaseapp.com",
  projectId: "fir-93f02",
  storageBucket: "fir-93f02.appspot.com",
  messagingSenderId: "191584422973",
  appId: "1:191584422973:web:b15eb850c24366e4f92e54",
  measurementId: "G-285DFMD5EG"
};

export default firebase.initializeApp(firebaseConfig)