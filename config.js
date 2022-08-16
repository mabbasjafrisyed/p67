import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyAGjcJjZcJY01xDE58Tlsx5P-40Dek8_aY",
  authDomain: "team-voting-app-99824.firebaseapp.com",
  databaseURL: "https://team-voting-app-99824-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-99824",
  storageBucket: "team-voting-app-99824.appspot.com",
  messagingSenderId: "602519505873",
  appId: "1:602519505873:web:befe9565eae776f3e7eef0",
  measurementId: "G-MT0HW76CB5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();