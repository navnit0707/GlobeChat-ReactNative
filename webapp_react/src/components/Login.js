import React, { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Header from "./Header/Header";

export default function Login() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/chatUI");
  }
  return (
    <>
      <Header />
      <div
        style={{
          padding: "2rem 2rem",
          display: "flex",
          flexFlow: "column",
          alignContent: "center",
          justifyContent: "center",
          border: "1px solid #f0f0f0",
          marginLeft: "-15px",
          marginRight: "-15px",
        }}>
        <h3>
          <strong>Join Chat: </strong>
        </h3>
        <form
          style={{
            marginLeft: "4px",
            padding: "0 1.5rem ",
          }}
          onSubmit={handleSubmit}>
          <div style={{ width: "100%" }} key="Username">
            <p>Username</p>
            <input type="text" autoComplete="true" name="username" />
          </div>
          <div key="country">
            <p>Country</p>
            <input type="dropdown" autoComplete="true" name="country" />
          </div>
          <div key="gender">
            <p>Gender:</p>
            <label>
              <input type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" />
              Female
            </label>
            <label>
              <input type="radio" name="gender" value="others" />
              Others
            </label>
          </div>
          <div key="avtar">
            <p>Avtar</p>
            <input type="text" name="avtar" />
          </div>
          <div key="Captcha" style={{ display: "none" }}>
            <p>Captcha</p>
            <input type="text" name="captcha" />
          </div>
          <br />
          <button onClick={handleSubmit}>SignIn</button>
        </form>
      </div>
    </>
  );
}
