import "./App.css";
import LOGO from "./assets/logo.png";
import TROPHY from "./assets/1.png";
import PRICE from "./assets/2.png";
import ACCE from "./assets/3.png";

function App() {
  return (
    <div className="Netart">
      <div className="mainContainer">
        <div className="navBar">
          <img src={LOGO} alt="logo" />
        </div>
        <div className="topFirst">
          <div className="trophy">
            <img src={TROPHY} alt="trophy" />
          </div>

          <div className="priceContainer">
            <div>
              <p>
                <b>
                  C.R.I pumps wins the national Energy conservation award 2018
                  for the 4th time.
                </b>
              </p>
              <ul>
                <li>
                  C.R.I's energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy
                </li>
                <li>
                  C.R.I is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Service Limited) to
                  replace the old inefficient pumps with 5 star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </li>
              </ul>
              <div className="imgContainer">
                <img src={PRICE} alt="price" className="price" />
              </div>
              <p>
                Government of India has awarded{" "}
                <b>"National Energy conservation Award 2018"</b>, Mr. G.
                Selvaraj, joint Managing Director of C.R.I Group received the
                award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
                Raj Kumar Singh, Honorable Minister of State.
              </p>
            </div>
          </div>
        </div>
        <p className="application">
          installed over 10 lakhs star rated pumps across the country resulting
          in a cumulative saving of more than 9,000 million units of power for
          the nation.
        </p>
        <div className="accessories">
          <img src={ACCE} alt="accessories" />
          <p>
            Valves - pumps - Pipes - IoT Drives & Controller - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
        <div className="footer">
          <p className="title">
            C.R.I Fluid Systems products cater to diverse segments
          </p>
          <div className="options">
            <p>Chemicals & Process</p>
            <p>Power</p>
            <p>Water & Waste Water</p>
            <p>Oil & Gases</p>
            <p>Pharma</p>
            <p>Sugar & Distilleries</p>
            <p>Paper & pulp</p>
            <p>Marine & Defence</p>
            <p>Metal & Mining</p>
            <p>Food & Beverage</p>
            <p>Petrochemical & Refineries</p>
            <p>Solar</p>
            <p>Building</p>
            <p>HVAC</p>
            <p>FIRE</p>
            <p>Fire Fighting</p>
            <p>Agricultural & Residential</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
