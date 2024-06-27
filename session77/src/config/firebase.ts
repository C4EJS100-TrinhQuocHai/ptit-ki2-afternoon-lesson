// cấu hình fire base
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_KEY_FIREBASE,
    authDomain: "ptit-2b7f7.firebaseapp.com",
    projectId: "ptit-2b7f7",
    storageBucket: "ptit-2b7f7.appspot.com",
    messagingSenderId: "954461185426",
    appId: "1:954461185426:web:5278be04c3d2ed6b80cd4b",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app)