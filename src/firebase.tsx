import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig:any = {
  apiKey: "AIzaSyCrGA6fs4adXrEKdGTpD2dAJ7L1A3Z0nO4",
  authDomain: "yamabaku-vote-app.firebaseapp.com",
  databaseURL: "https://yamabaku-vote-app.firebaseio.com",
  projectId: "yamabaku-vote-app",
  storageBucket: "yamabaku-vote-app.appspot.com",
  messagingSenderId: "483777628110",
  appId: "1:483777628110:web:d5e156f7df169a44a3cd9f",
  measurementId: "G-WR3XC33X8Y"
};
  firebase.initializeApp(firebaseConfig);
  export default firebase;
  export const db = firebase.firestore();