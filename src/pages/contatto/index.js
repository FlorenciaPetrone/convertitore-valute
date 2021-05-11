import React, { useState } from "react";
import { updateUserData } from "../../utils/services";

import "./styles.css";

const Contatto = () => {
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const changeHandler = (value, field) => {
    setUserForm({ ...userForm, [field]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userForm);
    updateUserData(userForm);
    setUserForm({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <form id="form" className="form-container" onSubmit={submitHandler}>
        <h1>Contattaci</h1>
        <div>
          <span>
            <label htmlFor="name">* Nome</label>
            <input
              type="text"
              value={userForm.firstName}
              name="firstName"
              onChange={(e) => changeHandler(e.target.value, "firstName")}
            />
          </span>
          <span>
            <label htmlFor="cognome">* Cognome</label>
            <input
              type="text"
              value={userForm.lastName}
              name="lastName"
              onChange={(e) => changeHandler(e.target.value, "lastName")}
            />
          </span>
          <span>
            <label htmlFor="email">* Email</label>
            <input
              type="text"
              value={userForm.email}
              name="email"
              onChange={(e) => changeHandler(e.target.value, "email")}
            />
          </span>
          <span>
            <label htmlFor="message">Messaggio:</label>
            <textarea
              name="message"
              value={userForm.message}
              onChange={(e) => changeHandler(e.target.value, "message")}
            />
          </span>
          <span className="submit">
            <button type="submit">Inviare</button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Contatto;
