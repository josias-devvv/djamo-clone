import React from "react";
import Navigation from "../../components/navigation";
import "./style.css";
import phone from "../../images/djamo_phone.svg";
import cart from "../../images/djamo_card.webp";
import Buttony from "../../components/button";
import Container from "../../components/container";
import CardService from "../../components/card";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="spacer" />
      {/* Hello Djamo */}
      <div className="hello-container">
        <div className="hello-container-main">
          <div>
            <h1>#hellodjamo</h1>
            <p
              style={{
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
              <Buttony text="Ouvrir un compte gratuit" top={12} left={26} />
            </div>
            <div className="form">
              <select>
                <option>+225</option>
              </select>
              <input
                type="tel"
                placeholder="Votre numéro de téléphone"
                minLength="10"
                maxLength="10"
                required
                onKeyDown={(e) => {
                  const num =
                    (e.key >= "0" && e.key <= "9") ||
                    [
                      "+",
                      "(",
                      ")",
                      "-",
                      "ArrowLeft",
                      "ArrowRight",
                      "Delete",
                      "Backspace",
                      "Enter",
                      "Tab",
                    ].includes(e.key);
                  if (!num) {
                    e.preventDefault();
                  }
                }}
              />

              <div>
                <Buttony text="Ouvrir un compte gratuit" />
              </div>
            </div>
          </div>
          <div className="djamo-images">
            <img src={phone} alt="djamo-phone" className="phone-image" />
            <img src={cart} alt="djamo-phone" className="cart-image" />
          </div>
        </div>
      </div>
      {/* {} */}
      <div style={{ backgroundColor: "black" }}>
        <Container>
          <div className="section2">
            <div className="section-text" style={{ marginRight: "20px" }}>
              <svg
                class="svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"></path>
              </svg>
              <div>
                <h3>Ouvrez un compte en 1min</h3>
                <p>
                  Créez votre compte et recevez immédiatement une carte
                  virtuelle VISA gratuite.
                </p>
              </div>
            </div>
            <div className="section-text" style={{ marginRight: "20px" }}>
              <svg
                class="w-6 h-6 mr-3 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                ></path>
              </svg>
              <div>
                <h3>Commandez votre carte physique</h3>
                <p>
                  Recevez votre carte en 48h, retirez de l'argent et payez sans
                  frais partout dans le monde.
                </p>
              </div>
            </div>
            <div className="section-text">
              <svg
                class="svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"></path>
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z"
                ></path>
              </svg>
              <div>
                <h3>Accédez aux services via l'appli</h3>
                <p>
                  Epargnez, transférez, recevez votre salaire, gérez vos
                  dépenses via l'application mobile.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="services" style={{ backgroundColor: "#F3F4F6" }}>
        <Container>
          <h2>L'appli qu'il vous faut pour mieux gérer votre argent</h2>
          <p>
            Dites adieu à la frustration!
            <br />
            Simplifiez votre vie financière en gérant tout votre argent en un
            seul et même endroit.
          </p>
          <div className="card-list">
            <CardService
              text={"Des retraits gratuits votre argent"}
              title={"Retrait gratuit"}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"></path>
              </svg>
            </CardService>
            <CardService
              text={"Des retraits gratuits votre argent"}
              title={"Retrait gratuit"}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"></path>
              </svg>
            </CardService>
            <CardService
              text={"Des retraits gratuits votre argent"}
              title={"Retrait gratuit"}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"></path>
              </svg>
            </CardService>
            <CardService
              text={"Des retraits gratuits votre argent"}
              title={"Retrait gratuit"}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"></path>
              </svg>
            </CardService>
            <CardService
              text={"Des retraits gratuits votre argent"}
              title={"Retrait gratuit"}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"></path>
              </svg>
            </CardService>
            <CardService
              text={"Des retraits gratuits votre argent"}
              title={"Retrait gratuit"}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"></path>
              </svg>
            </CardService>
            <CardService
              text={"Des retraits gratuits votre argent"}
              title={"Retrait gratuit"}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"></path>
              </svg>
            </CardService>
            <CardService
              text={"Des retraits gratuits votre argent"}
              title={"Retrait gratuit"}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"></path>
              </svg>
            </CardService>
          </div>
        </Container>
      </div>
    </div>
  );
}
