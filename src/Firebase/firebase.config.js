// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTvTBKTjAWfGcqejcoV4ajNW9EbGJ7uW4",
  authDomain: "react-dragon-news-e579e.firebaseapp.com",
  projectId: "react-dragon-news-e579e",
  storageBucket: "react-dragon-news-e579e.appspot.com",
  messagingSenderId: "553950872599",
  appId: "1:553950872599:web:0b21a3b0e08e85d9494852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;