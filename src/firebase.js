//import firebase from 'firebase/app'
import 'firebase/storage'
import * as fire from "firebase";
import "firebase/firestore";
 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAKWdDmbPqKqJTZ5wmqtn5OZ22LoCtLTbM",
    authDomain: "mega-parodia.firebaseapp.com",
    projectId: "mega-parodia",
    storageBucket: "mega-parodia.appspot.com",
    messagingSenderId: "483920467168",
    appId: "1:483920467168:web:e56750459a4cc53e826c85",
    measurementId: "G-D6TZD11X7R"
};

// Initialize Firebase
fire.initializeApp(firebaseConfig);
const storage = fire.storage()

//export default firebase.firestore();
var firebase1 = fire.firestore();

export  {
    storage, firebase1 as default
}


/*
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
const config = {
    apiKey: "AIzaSyC32lkjiyr7WcjmRU2HOdZ1G18wzSMiGD0",
    authDomain: "mi-mandadero.firebaseapp.com",
    databaseURL: "https://mi-mandadero-default-rtdb.firebaseio.com",
    projectId: "mi-mandadero",
    storageBucket: "mi-mandadero.appspot.com",
    messagingSenderId: "1055645118874",
    appId: "1:1055645118874:web:fa2b0093b05e6c8ada0a23"
};

// Initialize Firebase
firebase.initializeApp(config);
const storage = firebase.storage()

export  {
    storage, firebase as default
}
*/
//export default firebase.firestore();