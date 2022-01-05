// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCjtOYf9B4kDE-d4XtSOsNtucZGIl2IUHM",
  authDomain: "swasthya-upchara.firebaseapp.com",
  projectId: "swasthya-upchara",
  storageBucket: "swasthya-upchara.appspot.com",
  messagingSenderId: "647804794630",
  appId: "1:647804794630:web:f976b0613ca053d3e79087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

const db = getFirestore();