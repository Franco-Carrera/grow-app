import "./ItemList.css";
import Button from "../Button/Button";

const ItemListContainer = (props) => {
  const miFuncion = () => {
    console.log("estoy en ItemList e hice click en about");
  };

  return <Button label="Contador" funcion={miFuncion}></Button>;
};

// Podemos usar un componente de presentación para
// distintas funciones en botones de navbar
// + Children

export default ItemListContainer;
