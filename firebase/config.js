import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBpy4khr9jjtnZmo70DMdt-uboOQVc2p2Q",
    authDomain: "alive-app-99e7f.firebaseapp.com",
    projectId: "alive-app-99e7f",
    storageBucket: "alive-app-99e7f.appspot.com",
    messagingSenderId: "174637208189",
    appId: "1:174637208189:web:98ec92c54aca6557779714",
    measurementId: "G-G0KE04CS7R"
  };

// Initialize Firebase
// const Firebase = firebase.initializeApp(firebaseConfig)

let Firebase = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default Firebase