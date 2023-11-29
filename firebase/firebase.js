import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAT2C8UopGrxHcCLwQgONP2vEd7ObyOzY",
  authDomain: "arqsoft-7c653.firebaseapp.com",
  projectId: "arqsoft-7c653",
  storageBucket: "arqsoft-7c653.appspot.com",
  messagingSenderId: "1009510692879",
  appId: "1:1009510692879:web:7d1768293f7709e7ce8b7a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;