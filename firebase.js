import firebase from "firebase";
// import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBQCS0swFRqjTey9iMScIEmdwbzC17jAOs",
  authDomain: "history-app-bb570.firebaseapp.com",
  databaseURL: "https://history-app-bb570-default-rtdb.firebaseio.com",
  projectId: "history-app-bb570",
  storageBucket: "history-app-bb570.appspot.com",
  messagingSenderId: "458156866409",
  appId: "1:458156866409:web:d8756b6dcdf52d65dd5bf8",
  measurementId: "G-HGPCF0Q35G",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
