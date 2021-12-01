import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMGFLgmxi92DVakizI-IZDoSeGtACb7R4",
    authDomain: "very-hot-burgers-7c995.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-7c995-default-rtdb.europe-west1.firebasedatabase.app"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;