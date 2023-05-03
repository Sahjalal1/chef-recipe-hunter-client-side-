// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg1b13ufT__tIKd0WDqN3cn4a189BOvsQ",
  authDomain: "chfes-auth-provider.firebaseapp.com",
  projectId: "chfes-auth-provider",
  storageBucket: "chfes-auth-provider.appspot.com",
  messagingSenderId: "1059049081253",
  appId: "1:1059049081253:web:148dd3389401e5f952804c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;