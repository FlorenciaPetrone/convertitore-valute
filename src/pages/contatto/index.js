//React
import React from "react";
//Styles
import "./styles.css";

const Contatto = () => {
  return (
    <div className="contact-container">
      <form className="form-container">
        <h1>Contattaci</h1>
        <div>
          <p>
            <label for="name">* Nome</label>
            <input type="text" placeholder="Nome" />
          </p>
          <p>
            <label for="cognome">* Cognome</label>
            <input type="text" placeholder="Cognome" />
          </p>
          <p>
            <label for="email">* Email</label>
            <input type="text" placeholder="Email" />
          </p>
          <p>
            <label for="message">Messaggio:</label>
            <textarea name="message" placeholder="Messaggio" />
          </p>
          <p className="submit">
            <button type="submit">Inviare</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contatto;
