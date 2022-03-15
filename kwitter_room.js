
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBtX69rbUebTkdFfMqVhz2CaiIgAt2VZdk",
      authDomain: "letschat-web-app---1-2124e.firebaseapp.com",
      databaseURL: "https://letschat-web-app---1-2124e-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app---1-2124e",
      storageBucket: "letschat-web-app---1-2124e.appspot.com",
      messagingSenderId: "969487261528",
      appId: "1:969487261528:web:ded6213a94b5f99c318f2d"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function add_room() {
      room_name = document.getElementById("room_name").value;

    localStorage.setItem("roomname", room_name);

    window.location="kwitter_page1.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
