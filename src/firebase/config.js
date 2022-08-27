import { initializeApp } from "firebase/app";;
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'; 

const firebaseConfig = {
  apiKey: "AIzaSyCtpGZTxWCthq73rJxRNWtT_TICDe5DHH0",
  authDomain: "new-jurnal-app.firebaseapp.com",
  projectId: "new-jurnal-app",
  storageBucket: "new-jurnal-app.appspot.com",
  messagingSenderId: "606861732591",
  appId: "1:606861732591:web:bf01ed61ac0756bb0ac91a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
