import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDTkHV7QXyp8i7Csq-oIYci9iNOSbyEOq0",
  authDomain: "net-ninjs-marioplan-101.firebaseapp.com",
  databaseURL: "https://net-ninjs-marioplan-101.firebaseio.com",
  projectId: "net-ninjs-marioplan-101",
  storageBucket: "",
  messagingSenderId: "386100492720",
  appId: "1:386100492720:web:11cbd686d4f38ebe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;