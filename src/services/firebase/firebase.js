import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  Timestamp,
  writeBatch,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, "categories"))
      .then((querySnapshot) => {
        const categories = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(categories);
      })
      .catch((error) => {
        reject(`Error obteniendo categorias: ${error}`);
      });
  });
};

export const getProducts = (key, operator, value) => {
  return new Promise((resolve, reject) => {
    const collectionQuery =
      key && operator && value
        ? query(collection(db, "items"), where(key, operator, value))
        : collection(db, "items");
    getDocs(collectionQuery)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(products);
      })
      .catch((err) => {
        reject(
          `Error obtendiendo productos ${value ? "por categoria" : ""}: ${err}`
        );
      });
  });
};

export const getProductById = (itemid) => {
  return new Promise((resolve, reject) => {
    getDoc(doc(db, "items", itemid))
      .then((querySnapshot) => {
        const product = { id: querySnapshot.id, ...querySnapshot.data() };
        resolve(product);
      })
      .catch((error) => {
        reject("Error obteniendo producto: " + error);
      });
  });
};

export const createOrder = (objOrder) => {
  return new Promise((resolve, reject) => {
    objOrder = {
      ...objOrder,
      date: Timestamp.fromDate(new Date()),
    };
    const batch = writeBatch(db);
    const outOfStock = [];

    objOrder.items.forEach((prod, i) => {
      getDoc(doc(db, "items", prod.id)).then((DocumentSnapshot) => {
        if (DocumentSnapshot.data().stock >= objOrder.items[i].quantity) {
          batch.update(doc(db, "items", DocumentSnapshot.id), {
            stock: DocumentSnapshot.data().stock - objOrder.items[i].quantity,
          });
        } else {
          outOfStock.push({
            ...DocumentSnapshot.data(),
            id: DocumentSnapshot.id,
          });
        }
      });
    });

    if (outOfStock.length === 0) {
      addDoc(collection(db, "orders"), objOrder)
        .then(() => {
          batch.commit().then(() => {
            resolve("La orden se ejecutó con éxito");
          });
        })
        .catch((error) => {
          reject("Error al ejecutar la orden: " + error);
        });
    }
  });
};
