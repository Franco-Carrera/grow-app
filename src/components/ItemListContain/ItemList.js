import "./ItemList.css";
import Button from "../Button/Button";

///// Esto va a contener la galería
const ItemListContainer = (funciones, labels) => {
  const miFuncion = () => {
    console.log("estoy en ItemList e hice click en Contador");
  };
  return <Button labels="Ver productos" funciones={miFuncion}></Button>;
};

// Podemos usar un componente de presentación para
// distintas funciones en botones de navbar
// + Children

export default ItemListContainer;
//// ir crtl z iniciar again
