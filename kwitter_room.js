  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBWIXATqJmLZI5DEnoYU3SJb3hvB04L-s8",
    authDomain: "chat-app-592d2.firebaseapp.com",
    projectId: "chat-app-592d2",
    storageBucket: "chat-app-592d2.appspot.com",
    messagingSenderId: "65585058068",
    appId: "1:65585058068:web:5cc7c620daadddf32ab201"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
