import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDWCTVQ2hjsk2aVXVLVmu64qD7Xme7LFqk",
  authDomain: "disneyplus-satya.firebaseapp.com",
  projectId: "disneyplus-satya",
  storageBucket: "disneyplus-satya.appspot.com",
  messagingSenderId: "338652811355",
  appId: "1:338652811355:web:bef66130b750d90fd5af7e",
  measurementId: "G-KPVFXZ81R5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
