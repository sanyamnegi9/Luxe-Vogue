import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIGczegdlsKgigxujxi_MMHQfIbKSKgFo",
  authDomain: "luxevogue.firebaseapp.com",
  projectId: "luxevogue",
  storageBucket: "luxevogue.appspot.com",
  messagingSenderId: "1053055083665",
  appId: "1:1053055083665:web:f8a483ca99abaddf278b30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
export { fireDb, auth };
