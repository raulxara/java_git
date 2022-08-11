import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/functions';


const firebaseConfig = {
   //sua key firebase
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

  export {db, auth, storage, functions};