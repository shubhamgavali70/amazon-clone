import firebase from "firebase";
const firebaseConfig = {
  //PASTE FIREBASE CONFIG OBJECT FROM FIREBASE CONSOLE
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
