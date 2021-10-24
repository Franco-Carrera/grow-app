import React from "react";
import imageHome from "../../assets/images/wallet.svg";
import imageHome2 from "../../assets/images/client.svg";
import imageHome3 from "../../assets/images/carrito-home.jpeg";
import imageHome4 from "../../assets/eastwood.png";
import "./Home.css";

const Home = () => {
  return (
    <section className="container-home">
      <div className="row">
        <div className="col-2">
          <h1>
            Ver lo destacado <br /> en nuestra tienda
          </h1>
          <h3>
            Imperdibles descuentos en su primera compra. Deslice para verlos
          </h3>
        </div>

        <div className="content-all">
          <div className="content-carrousel">
            <figure>
              <img alt="Filtros Slim" src={imageHome2} />
            </figure>
            <figure>
              <img alt="Home money" src={imageHome} />
            </figure>
            <figure>
              <img alt="carrito home" src={imageHome3} />
            </figure>
            <figure>
              <img alt="eastwood" src={imageHome4} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
// hover en ver lo destacado // Button con link que me lleve a products

export default Home;
