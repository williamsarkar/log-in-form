// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFD9deRZnZQn3o15SjEgjNeESGNEEOX2I",
  authDomain: "auth-moha-milon-5f505.firebaseapp.com",
  projectId: "auth-moha-milon-5f505",
  storageBucket: "auth-moha-milon-5f505.appspot.com",
  messagingSenderId: "667695831411",
  appId: "1:667695831411:web:6cf639dba6647b8d2f4d06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;