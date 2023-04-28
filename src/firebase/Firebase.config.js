// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLQnBT6hEe7msyEAcioh9bqjC1lgmN_NI",
  authDomain: "the-news-dragon-client-c5bbf.firebaseapp.com",
  projectId: "the-news-dragon-client-c5bbf",
  storageBucket: "the-news-dragon-client-c5bbf.appspot.com",
  messagingSenderId: "644405649370",
  appId: "1:644405649370:web:d3cc2a4641797025e52ae3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;