// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyJeDRe8-vN1GhwPOfv_Zri5TnmHqOhfw",
  authDomain: "company-assignment-ed1d6.firebaseapp.com",
  projectId: "company-assignment-ed1d6",
  storageBucket: "company-assignment-ed1d6.appspot.com",
  messagingSenderId: "926501763218",
  appId: "1:926501763218:web:9c4114923fd71a9396ce4b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default getStorage(firebaseApp)