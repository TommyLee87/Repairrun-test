import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnpbB4T_fy6lgt0cHyIN_pMmxFNPs7FfU",
  authDomain: "repairrun-dae01.firebaseapp.com",
  projectId: "repairrun-dae01",
  storageBucket: "repairrun-dae01.appspot.com",
  messagingSenderId: "1081178393960",
  appId: "1:1081178393960:web:b80145c0e353be389e9add",
  measurementId: "G-EFB7YRS1XJ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
