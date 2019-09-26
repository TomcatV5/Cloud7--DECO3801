import Firebase from "firebase";


let config = {
    apiKey: "AIzaSyCujJ2OWBvxNI0UzShYtFCqvHYMsCSX4Dc",
    authDomain: "app-v1-37bf2.firebaseapp.com",
    databaseURL: "https://app-v1-37bf2.firebaseio.com",
    projectId: "app-v1-37bf2",
    storageBucket: "",
    messagingSenderId: "1059003578049",
    appId: "1:1059003578049:web:166b90c3737cb413950640"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();
