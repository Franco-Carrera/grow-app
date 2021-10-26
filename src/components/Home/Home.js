import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { SliderData } from "../Slider/SliderData";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import imageHome from "../../assets/images/wallet.svg";
import imageHome2 from "../../assets/images/client.svg";
import imageHome3 from "../../assets/images/carrito-home.jpeg";
import imageHome4 from "../../assets/eastwood.png";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <section className="container-home">
        <div className="row">
          <div className="col-2">
            <h1>
              Productos destacados <br /> en nuestra tienda
            </h1>
            <h3>
              Imperdibles descuentos en su primera compra. Deslice para verlos
            </h3>
            <Link to="/">
              <button className="Button__home">Ver tienda</button>
            </Link>
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
      <section>
        <Slider slides={SliderData} />
        <Footer />
      </section>
    </Fragment>
  );
};
// hover en ver lo destacado // Button con link que me lleve a products

export default Home;
