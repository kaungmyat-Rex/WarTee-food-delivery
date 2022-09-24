import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANXe1K4howcBV-WF_yni_uTRqFYjnKKYM",
  authDomain: "image-store-4aed4.firebaseapp.com",
  projectId: "image-store-4aed4",
  storageBucket: "image-store-4aed4.appspot.com",
  messagingSenderId: "497739550457",
  appId: "1:497739550457:web:2eae849a90fb3e838b9c28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
