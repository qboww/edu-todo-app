import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: "todo-app-31394.firebaseapp.com",
  projectId: "todo-app-31394",
  storageBucket: "todo-app-31394.appspot.com",
  messagingSenderId: "1023772761842",
  appId: "1:1023772761842:web:41fb8aa5fbe843024ffa6b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
