import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyAdhAPQxetEk6T_LcLFGvCE3QSffFOdvBo",
    authDomain: "reactbootcamp101.firebaseapp.com",
    databaseURL: "https://reactbootcamp101.firebaseio.com",
    projectId: "reactbootcamp101",
    storageBucket: "reactbootcamp101.appspot.com",
    messagingSenderId: "765260015341",
    appId: "1:765260015341:web:08c8831632da9025"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;