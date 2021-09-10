import { useState, useEffect } from "react";
import { data } from "../../data";
// import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";
import "./ItemListcontain.css";

function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000);
  });
}

const ItemListContainer = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const list = getList();

    list
      .then(
        (list) => {
          setItemList(list);
        },
        (err) => console.log(err)
      )
      .catch((reason) => console.log(reason));
  }, []);

  return (
    <main>
      <h1>Productos</h1>
      <ItemList items={itemList} />
    </main>
  );
};

///// Esto va a contener la galería

export default ItemListContainer;
// Podemos usar un componente de presentación para
// distintas funciones en botones de navbar
// + Children

//// ir crtl z iniciar again
