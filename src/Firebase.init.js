// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgrkOYKAuREpvW0ugZt8hSpZGASZu0-6c",
  authDomain: "my-firebase-web-c233f.firebaseapp.com",
  projectId: "my-firebase-web-c233f",
  storageBucket: "my-firebase-web-c233f.firebasestorage.app",
  messagingSenderId: "277979185709",
  appId: "1:277979185709:web:a837ea0680a9bdd2f22ea4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);