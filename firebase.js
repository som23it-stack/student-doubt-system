import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBH8H7AxuMIndVHmtqzylK2zAjOo7OG08w",
  authDomain: "studentdout.firebaseapp.com",
  projectId: "studentdout",
  storageBucket: "studentdout.appspot.com",
  messagingSenderId: "682842749499",
  appId: "1:682842749499:web:8deb5d974751f97a43ba1e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.register = function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Registered Successfully"))
    .catch(err => alert(err.message));
}

window.login = function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        if(email === "admin@gmail.com"){
            window.location = "admin.html";
        } else {
            window.location = "student.html";
        }
    })
    .catch(err => alert(err.message));
}
