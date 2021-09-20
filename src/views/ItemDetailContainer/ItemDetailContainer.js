import { useState, useEffect } from "react/cjs/react.development";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getList } from "../../getList";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
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
      <ItemDetail key={item?.id} item={item} />
    </div>
  );
};

export default ItemDetailContainer;
