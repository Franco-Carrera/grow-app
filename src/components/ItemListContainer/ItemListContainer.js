import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import Loading from "../Loading/Loading";
import { getProducts } from "../../services/firebase/firebase";
import { useParams } from "react-router-dom";
import Home from "../Home/Home";
import { SliderData } from "../Slider/SliderData";
import Slider from "../Slider/Slider";

const ItemListContainer = () => {
  const { categoryid } = useParams(); //id poner sino
  const [products, setProducts] = useState([]); //  sino ([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts("category", "==", categoryid)
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      setLoading(true);
      setProducts([]);
    };
  }, [categoryid]);

  return (
    <section>
      <div className="itemListContainer">
        <Home />
        <h1>Productos</h1>
        {loading ? <Loading /> : <ItemList products={products} />}
      </div>
      <Slider slides={SliderData} />
    </section>
  );
};

export default ItemListContainer;
