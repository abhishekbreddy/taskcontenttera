import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARHOWTLbbdTj2eN3sEuu0D2eo6A4EFWKM",
  authDomain: "asssignment1-f5969.firebaseapp.com",
  projectId: "asssignment1-f5969",
  storageBucket: "asssignment1-f5969.appspot.com",
  messagingSenderId: "320514959",
  appId: "1:320514959:web:483eebd27efa7bc8c1b9fa",
  measurementId: "G-DBTD8HE7G6"
};

// Initialize Firebase and get analytics
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
