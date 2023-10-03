// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDg6TVXT9RFRCeN9IaW2nvCYuW-brh_nVc",
  authDomain: "dragon-news-c6695.firebaseapp.com",
  projectId: "dragon-news-c6695",
  storageBucket: "dragon-news-c6695.appspot.com",
  messagingSenderId: "97629616509",
  appId: "1:97629616509:web:1bb3870c71847209627414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;