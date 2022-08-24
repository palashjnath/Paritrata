

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyBZjlsozEQRRn2Vq0jAnPA4U904-EosHmo",
    authDomain: "terravision-749d2.firebaseapp.com",
    databaseURL: "https://terravision-749d2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "terravision-749d2",
    storageBucket: "terravision-749d2.appspot.com",
    messagingSenderId: "767790473162",
    appId: "1:767790473162:web:e1be65dd0b8eca236fb933",
    measurementId: "G-255FTFD62X"
  //your config json file
};


firebase.initializeApp(config);

export const firestore = firebase.firestore();


export default firebase;

 
