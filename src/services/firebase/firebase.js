import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmLxldJL3TD3HPwiSenjfE0e270oT2YEE",
  authDomain: "mi-proyecto-react-4dfa2.firebaseapp.com",
  projectId: "mi-proyecto-react-4dfa2",
  storageBucket: "mi-proyecto-react-4dfa2.appspot.com",
  messagingSenderId: "480699770165",
  appId: "1:480699770165:web:afede6ad44e3753f8f987c",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
  return app;
};

export const db = getFirestore(app);
