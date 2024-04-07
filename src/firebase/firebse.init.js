// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5TsA4A45nkiSNoUFqPbRNeyVHLfYkgcE",
  authDomain: "react-with-firebase-371df.firebaseapp.com",
  projectId: "react-with-firebase-371df",
  storageBucket: "react-with-firebase-371df.appspot.com",
  messagingSenderId: "265719602016",
  appId: "1:265719602016:web:bd58dbb1edc8ae980d9c05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
