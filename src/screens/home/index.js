import React from "react";
import Navigation from "../../components/navigation";
import "./style.css";
import phone from "../../images/djamo_phone.svg";
import cart from "../../images/djamo_card.webp";
import Buttony from "../../components/button";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="spacer" />
      {/* Hello Djamo */}
      <div className="hello-container">
        <div>
          <h1>#hellodjamo</h1>
          <p
            style={{
              fontSize: "20px",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              marginBottom: 36,
            }}
            className="hello-text"
          >
            <span>L'appli pour mieux gérer votre argent.</span>
            <span>Ouvrez un compte gratuit maintenant en un clic.</span>
          </p>
          <div className="buttonn">
            <Buttony text="Ouvrir un compte gratuit" top={16} left={26} />
          </div>
          <div className="form">
            <select>
              <option>+225</option>
            </select>
            <input type="text" placeholder="Votre numéro de téléphone" />
            <div>
              <Buttony text="Ouvrir un compte gratuit" />
            </div>
          </div>
        </div>
        <div className="djamo-images">
          <img src={phone} alt="djamo-phone" />
          <img src={cart} alt="djamo-phone" className="cart-image" />
        </div>
      </div>
    </div>
  );
}
