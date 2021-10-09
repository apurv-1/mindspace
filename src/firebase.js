import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7Pp8-nOFhLRMU8jSP2eTO73fdneFIQDA",
  authDomain: "mindspace-2a3a2.firebaseapp.com",
  projectId: "mindspace-2a3a2",
  storageBucket: "mindspace-2a3a2.appspot.com",
  messagingSenderId: "438246675387",
  appId: "1:438246675387:web:43d6bbc610f8157938ea9e",
  measurementId: "G-QGC7B1KMRR",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
export default db;
