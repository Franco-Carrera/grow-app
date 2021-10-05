import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { useEffect, useState } from "react";
//import { db } from "../../services/firebase/firebase";
//import { collection, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmLxldJL3TD3HPwiSenjfE0e270oT2YEE",
  authDomain: "mi-proyecto-react-4dfa2.firebaseapp.com",
  projectId: "mi-proyecto-react-4dfa2",
  storageBucket: "mi-proyecto-react-4dfa2.appspot.com",
  messagingSenderId: "480699770165",
  appId: "1:480699770165:web:afede6ad44e3753f8f987c",
};

const app = firebase.initializeApp(firebaseConfig);
/*
const firebaseFunction = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "items"))
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      })
      .catch((error) => {
        console.log("Error searching intems", error);
      });
  });
}; */

// export const get products

// export const get productsById

// Y todo se exporta a ItemListContainer

// createOrder reemplaza TimeStamp

export const getFirebase = () => {
  return app;
};

export const db = getFirestore(app);
