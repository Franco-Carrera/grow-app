import imageEast from "../../../src/assets/eastwood.png";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <section className="services">
        <div className="container">
          <h2 className="subtitle">
            Nuestros servicios<span className="point">.</span>
          </h2>
          <p className="copy__section">
            Ofrecemos las soluciones perfectas para la revolución digital
          </p>

          <article className="container-cards">
            <div className="card">
              {/* <img src="img/image2.jpg" class="card__img"> */}
              <div className="cards__text">
                <p className="card__list">Especialistas en diseño UX / UI</p>
                <h3 className="card__title">
                  Web apps<span className="point">.</span>
                </h3>
                <p className="card__copy">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  dolorum sit molestias ipsam at veritatis ut esse eius, dolor
                  est!
                </p>
                {/* <a href="#" class="card__button">Comienza tu proyecto</a> */}
              </div>
            </div>
            <div className="card">
              {/* <img src={imageEast} class="card__img"/>  */}
              <img src={imageEast} alt="Logo" />
              <div className="cards__text hidden">
                <p className="card__list">Especialistas en diseño UX / UI</p>
                <h3 className="card__title">
                  Diseño web<span className="point">.</span>
                </h3>
                <p className="card__copy">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  dolorum sit molestias ipsam at veritatis ut esse eius, dolor
                  est!
                </p>
                {/* <a href="#" class="card__button">Comienza tu proyecto</a> */}
              </div>
            </div>
            <div className="card">
              {/* <img src="img/image3.jpg" class="card__img"> */}
              <div className="cards__text">
                <p className="card__list">Especialistas en diseño UX / UI</p>
                <h3 className="card__title">
                  Ecommerce<span class="point">.</span>
                </h3>
                <p className="card__copy">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  dolorum sit molestias ipsam at veritatis ut esse eius, dolor
                  est!
                </p>
                {/* <a href="#" class="card__button">Comienza tu proyecto</a> */}
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Main;
