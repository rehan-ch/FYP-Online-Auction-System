// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,serverTimestamp} from 'firebase/firestore'
import { getStorage } from "firebase/storage"
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import * as firebase from "firebase/app";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCX3jGXiWSgdS_9NuyFV3yVl89Wa_r96is",
  authDomain: "onlineauctionapp-d777a.firebaseapp.com",
  projectId: "onlineauctionapp-d777a",
  storageBucket: "onlineauctionapp-d777a.appspot.com",
  messagingSenderId: "712634213535",
  appId: "1:712634213535:web:fd86d49a6a2c301203eeaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
