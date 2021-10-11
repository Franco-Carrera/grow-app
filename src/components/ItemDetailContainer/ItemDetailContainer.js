import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
// import { getList } from "../../getList";
import { db } from "../../services/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getDoc(doc(db, "items", id))
      .then((querySnapshot) => {
        console.log({ id: querySnapshot.id, ...querySnapshot.data() });
        const product = { id: querySnapshot.id, ...querySnapshot.data() };
        setItem(product);
      })
      .catch((err) => {
        console.log(err);
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
      {loading ? <Loading /> : <ItemDetail item={item} id={id} />}
    </div>
  );
};

/* 

*/

export default ItemDetailContainer;
