import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
require('firebase/auth')
/**
 * Dio sa podacima potrebnim za pristup bazi
 * */
    // Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyB2W5l32nGkyE9FBA6eAFVikb2eMGestaE",

    authDomain: "test-d54cf.firebaseapp.com",

    projectId: "test-d54cf",

    storageBucket: "test-d54cf.appspot.com",

    messagingSenderId: "552456757288",

    appId: "1:552456757288:web:6a3819d7f539a4ac2fd51d",

    measurementId: "G-YMQZECCB9E"

};


firebase.initializeApp(firebaseConfig);
const db= firebase.firestore()
export {db}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);