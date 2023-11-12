import iconLuxury from "./assets/icon-luxury.svg";
import iconSedans from "./assets/icon-sedans.svg";
import iconSuvs from "./assets/icon-suvs.svg";
import "./App.css";

function App() {
  return (
    <main>
      <section className="container">
        {/* First Container */}
        <div className="first-container">
          <div className="image-container">
            <img src={iconSedans} alt="" aria-hidden="true"></img>
          </div>
          <h2 className="title">Sedans</h2>
          <p className="description">
            {" "}
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <a className="button">Learn more</a>
        </div>
        {/* Second Container */}
        <div className="second-container">
          <div className="image-container">
            <img src={iconSuvs} alt="" aria-hidden="true"></img>
          </div>
          <h2 className="title">SUVs</h2>
          <p className="description">
            {" "}
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <a className="button">Learn more</a>
        </div>
        {/* Third Container */}
        <div className="third-container">
          <div className="image-container">
            <img src={iconLuxury} alt="" aria-hidden="true"></img>
          </div>
          <h2 className="title">Luxury</h2>
          <p className="description">
            {" "}
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <a className="button">Learn more</a>
        </div>
      </section>
    </main>
  );
}

export default App;
