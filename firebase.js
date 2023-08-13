import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase, //get database from firebase
  ref, //gives us a specific reference in out database
  push, //creates a new location in a given reference
  set, //adds data to datadbase
  onValue, //reads data from the database
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
 
// Your web app's Firebase configuration
// ENTER FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyCbV93Ye1cnWXjdMKCUQOxmtbKAyk77Uwg",
  authDomain: "fir-demo-fc1d1.firebaseapp.com",
  projectId: "fir-demo-fc1d1",
  storageBucket: "fir-demo-fc1d1.appspot.com",
  messagingSenderId: "693626096130",
  appId: "1:693626096130:web:1a3cc36030b0cc9dbc751b",
  measurementId: "G-9944TKRR23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, push, set, onValue };