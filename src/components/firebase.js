import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDLqTmhNwRqa_zJaiY1rj_B0YdIj5BgQEg",
  authDomain: "simple-chat-45b68.firebaseapp.com",
  projectId: "simple-chat-45b68",
  storageBucket: "simple-chat-45b68.appspot.com",
  messagingSenderId: "707467712310",
  appId: "1:707467712310:web:2b367dac3d986d37738597"
  }).auth();

  