 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBIJkycMg1WNZymHrBzFC9wJX3jpO_XYJI",
    authDomain: "cloude-nine-3b283.firebaseapp.com",
    databaseURL: "https://cloude-nine-3b283.firebaseio.com",
    projectId: "cloude-nine-3b283",
    storageBucket: "cloude-nine-3b283.appspot.com",
    messagingSenderId: "221584438987",
    appId: "1:221584438987:web:369d58da2b625941cd8d4e",
    measurementId: "G-J5NYE1M50N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true})
  
  export default firebase;