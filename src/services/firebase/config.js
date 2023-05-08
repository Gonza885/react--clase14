
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAr1CokphUs9dR46Wg7oGcLSit-gAYOfUs",
  authDomain: "coder-firebase2-72caf.firebaseapp.com",
  projectId: "coder-firebase2-72caf",
  storageBucket: "coder-firebase2-72caf.appspot.com",
  messagingSenderId: "779093157795",
  appId: "1:779093157795:web:464b7973a503209dfcdc16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);