const firebaseConfig = {
      apiKey: "AIzaSyBHKC1LQJWE8NDFwaB5BSqudUS-spcy7X0",
      authDomain: "kwitter-d3bfd.firebaseapp.com",
      databaseURL: "https://kwitter-d3bfd-default-rtdb.firebaseio.com",
      projectId: "kwitter-d3bfd",
      storageBucket: "kwitter-d3bfd.appspot.com",
      messagingSenderId: "272384370549",
      appId: "1:272384370549:web:7bd4dc7193e10a9f03553c",
     
    };
    
    
    firebase.initializeApp(firebaseConfig);
   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
