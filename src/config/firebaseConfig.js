  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "YOUR_CONFIG",
    authDomain: "YOUR_CONFIG",
    databaseURL: "YOUR_CONFIG",
    projectId: "YOUR_CONFIG",
    storageBucket: "YOUR_CONFIG",
    messagingSenderId: "YOUR_CONFIG",
    appId: "YOUR_CONFIG",
    measurementId: "YOUR_CONFIG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ });

  export default firebase;
