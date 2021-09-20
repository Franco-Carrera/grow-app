import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getList } from "../../getList";
import "./ItemListContainer.css";

// item = cada product.

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    const list = getList();

    if (category) {
      list
        .then(
          (result) => {
            const filterProducts = result.find(
              (item) => item.category === category
            );
            setProducts(filterProducts);
          },
          (err) => console.log(err)
        )
        .catch((reason) => console.log(reason));
    } else {
      list.then((result) => setProducts(result));
    }
    return () => {
      setProducts(undefined);
    };
  }, [category]);

  return (
    <div className="itemListContainer">
      <h1>Productos</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
