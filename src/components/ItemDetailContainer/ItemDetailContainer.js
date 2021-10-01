import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getList } from "../../getList";
import "./ItemDetailContainer.css";

// Se puede cambiar por {getProductBy Id}

const ItemDetailContainer = (productsAdded, addProdFunction) => {
  const { id } = useParams();
  const [item, setItem] = useState(undefined);

  useEffect(() => {
    const list = getList();
    list
      .then(
        (result) => {
          const itemById = result.find(
            (product) => product.id === parseInt(id)
          );
          setItem(itemById);
        },
        (err) => console.log(err)
      )
      .catch((reason) => console.log(reason));
  }, [id]);

  return (
    <div className="itemDetailContainer">
      <ItemDetail
        //key={item?.id}
        item={item}
        productsAdded={productsAdded}
        addProdFunction={addProdFunction}
      />
    </div>
  );
};

export default ItemDetailContainer;
