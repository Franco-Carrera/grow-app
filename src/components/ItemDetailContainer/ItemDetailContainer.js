import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/firebase/firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((product) => {
        setItem(product);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      setLoading(true);
      setItem(undefined);
    };
  }, [id]);

  return (
    <div className="itemDetailContainer">
      {loading ? <Loading /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
