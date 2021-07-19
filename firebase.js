import firebase from 'firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBqENIzFSnGEB5-9WbaM4X98tWiPeJrshc",
    authDomain: "fb-clone-e56a5.firebaseapp.com",
    projectId: "fb-clone-e56a5",
    storageBucket: "fb-clone-e56a5.appspot.com",
    messagingSenderId: "218966650181",
    appId: "1:218966650181:web:d45ed087597698e2cf622c"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };