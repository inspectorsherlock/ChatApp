import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvSFH7NA0hjsb5lfS1BvdVBeARbRv0ftU",
    authDomain: "chat1-a30a8.firebaseapp.com",
    projectId: "chat1-a30a8",
    storageBucket: "chat1-a30a8.appspot.com",
    messagingSenderId: "1049994435089",
    appId: "1:1049994435089:web:8c895b84a306c64979afb0"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()