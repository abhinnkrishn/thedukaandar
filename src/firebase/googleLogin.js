// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// import {changeName} from "../Context/Context"


const firebaseConfig = {
  apiKey: "AIzaSyCIdP_b2p6SNKxlC5V3DvryU3pDLBeEap0",
  authDomain: "thedukaandar.firebaseapp.com",
  databaseURL: "https://thedukaandar.firebaseio.com",
  projectId: "thedukaandar",
  storageBucket: "thedukaandar.appspot.com",
  messagingSenderId: "278257760391",
  appId: "1:278257760391:web:0458aecb5df9ecc7102022",
  measurementId: "G-WCX736JTBR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// let storeUser;

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(user => {
  if(user)
  {
    console.log("USER IS LOGGED IN");
    console.log(user);
    console.log(user.email);
  }
  else
  console.log("USER IS LOGGED OUT");
  })

export function googleLogin() {

    console.log("Inside");

  firebase.auth().signInWithRedirect(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  console.log(token);
  // The signed-in user info.
  var user = result.user;
  console.log(user);
  console.log("FUN EXECUTED");
  })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  console.log(errorCode);
  var errorMessage = error.message;
  console.log(errorMessage);
  // The email of the user's account used.
  var email = error.email;
  console.log(email);
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log(credential);
  // ...
  console.log("ERROR HAPPENED");
  });
}


/*
  Redirect
*/
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    console.log(token);
    // ...
  }
  // The signed-in user info.
  var user = result.user;
  console.log(user);
  console.log(user.displayName);
  //call a function to change STATE
  // changeName(user);
    // storeUser = {
    //   ...user
    // }
  // console.log("THIS IS STORE USER", storeUser);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

export function googleSignout() {
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
}

// export {storeUser}


