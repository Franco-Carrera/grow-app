import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
//
//import { getList } from "../../getList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryid } = useParams(); //id poner sino
  const [products, setProducts] = useState([]); // probar sino ([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categoryid) {
      setLoading(true);
      getDocs(collection(db, "items"))
        .then((querySnapshot) => {
          const products = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          console.log(products);
          setProducts(products);
        })
        .catch((err) => {
          console.log("Error searching items", err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(true);
      getDocs(
        query(collection(db, "items"), where("category", "==", categoryid))
      )
        .then((querySnapshot) => {
          const products = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProducts(products);
        })
        .catch((err) => {
          console.log("Error searching items else", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryid]);

  // If else, para filtrar o no por categorías

  return (
    <div className="itemListContainer">
      <h1>Productos</h1>
      {loading ? "Loading..." : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
