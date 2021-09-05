import imageEast from "../../../src/assets/eastwood.png";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <section class="services">
        <div class="container">
          <h2 class="subtitle">
            Nuestros servicios<span class="point">.</span>
          </h2>
          <p class="copy__section">
            Ofrecemos las soluciones perfectas para revolución digital
          </p>

          <article class="container-cards">
            <div class="card">
              {/* <img src="img/image2.jpg" class="card__img"> */}
              <div class="cards__text">
                <p class="card__list">Especialistas en diseño UX / UI</p>
                <h3 class="card__title">
                  Web apps<span class="point">.</span>
                </h3>
                <p class="card__copy">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  dolorum sit molestias ipsam at veritatis ut esse eius, dolor
                  est!
                </p>
                {/* <a href="#" class="card__button">Comienza tu proyecto</a> */}
              </div>
            </div>
            <div class="card">
              {/* <img src={imageEast} class="card__img"/>  */}
              <img src={imageEast} className="" alt="Logo" />
              <div class="cards__text">
                <p class="card__list">Especialistas en diseño UX / UI</p>
                <h3 class="card__title">
                  Diseño web<span class="point">.</span>
                </h3>
                <p class="card__copy">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  dolorum sit molestias ipsam at veritatis ut esse eius, dolor
                  est!
                </p>
                {/* <a href="#" class="card__button">Comienza tu proyecto</a> */}
              </div>
            </div>
            <div class="card">
              {/* <img src="img/image3.jpg" class="card__img"> */}
              <div class="cards__text">
                <p class="card__list">Especialistas en diseño UX / UI</p>
                <h3 class="card__title">
                  Ecommerce<span class="point">.</span>
                </h3>
                <p class="card__copy">
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
