import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT7B1CdGoSogVGLJwq7WrGH_ZJZiFqFQA",
  authDomain: "loginsignup-c4929.firebaseapp.com",
  projectId: "loginsignup-c4929",
  storageBucket: "loginsignup-c4929.appspot.com",
  messagingSenderId: "424818723559",
  appId: "1:424818723559:web:51e55ade1380301314f042",
  measurementId: "G-SFK0TPVP2J"
};

const app = initializeApp(firebaseConfig);

export default app;