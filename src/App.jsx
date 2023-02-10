import axios from "axios";
import React from "react";

import { IoMdClose } from "react-icons/io";

import { ButtonFirstType, ButtonSecondType } from "./Components/Button/Index";

import "./Style.scss";

export default function App() {
  const checkbox = React.useRef(false);
  const [section, setSection] = React.useState(false);

  const [nameRegister, setNameRegister] = React.useState("");
  const [emailRegister, setEmailRegister] = React.useState("");
  const [passwordRegister, setPasswordRegister] = React.useState("");
  const [phoneNumberRegister, setPhoneNumberRegister] = React.useState("");

  const [emailLogin, setEmailLogin] = React.useState("");
  const [passwordLogin, setPasswordLogin] = React.useState("");

  function handleCreateCount() {
    if (section === false && checkbox.current === true) {
      if (nameRegister === "" && emailRegister === "" && passwordRegister === "" && phoneNumberRegister === "") {
        window.alert("Insira as informações!!!");
      } else {
        axios
          .post("https://localhost:8080/register", {
            name: nameRegister,
            email: emailRegister,
            password: passwordRegister,
            phoneNumber: phoneNumberRegister,
          })
          .then((response) => console.log(response.data));
      }
    } else if (section === true) {
      if (emailLogin === "" && passwordLogin === "") {
        window.alert("Insira as informações!!!");
      } else {
        axios
          .post("https://localhost:8080/login", {
            email: emailLogin,
            password: passwordLogin,
          })
          .then((response) => console.log(response.data));
      }
    }
  }

  return (
    <div className="App">
      <div className="Container">
        <div className="Title">
          <h2>{!section ? "Registre-se" : "Entrar"}</h2>
          <button>
            <IoMdClose />
          </button>
        </div>
        <div className="Content">
          {!section ? (
            <ul className="List">
              <li className="Item">
                <ButtonFirstType>Registre-se</ButtonFirstType>
              </li>
              <li className="Item">
                <ButtonSecondType onClick={() => setSection(!section)}>Entrar</ButtonSecondType>
              </li>
            </ul>
          ) : (
            <ul className="List">
              <li className="Item">
                <ButtonSecondType onClick={() => setSection(!section)}>Registre-se</ButtonSecondType>
              </li>
              <li className="Item">
                <ButtonFirstType>Entrar</ButtonFirstType>
              </li>
            </ul>
          )}
        </div>
        <div>
          {!section ? (
            <div className="ContentUser">
              <input
                type="number"
                name=""
                placeholder="+99 99 9999-9999"
                value={phoneNumberRegister}
                onChange={(e) => setPhoneNumberRegister(e.target.value)}
              />
              <input
                type="text"
                name=""
                placeholder="Insira um nome"
                value={nameRegister}
                onChange={(e) => setNameRegister(e.target.value)}
              />
              <input
                type="email"
                name=""
                placeholder="Insira um email"
                value={emailRegister}
                onChange={(e) => setEmailRegister(e.target.value)}
              />
              <input
                type="password"
                name=""
                placeholder="Insira uma senha"
                value={passwordRegister}
                onChange={(e) => setPasswordRegister(e.target.value)}
              />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="checkbox"
                  onClick={() => {
                    checkbox.current ? (checkbox.current = false) : (checkbox.current = true);
                  }}
                />
                <p>
                  Li e concordo com <span>os termos de uso do site.</span>
                </p>
              </label>
            </div>
          ) : (
            <div className="ContentUser">
              <input
                type="email"
                name=""
                placeholder="Insira um email"
                value={emailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
              />
              <input
                type="password"
                name=""
                placeholder="Insira uma senha"
                value={passwordLogin}
                onChange={(e) => setPasswordLogin(e.target.value)}
              />
            </div>
          )}
          <button type="submit" className="Button" onClick={handleCreateCount}>
            {!section ? "Registre-se" : "Entrar"}
          </button>
        </div>

        {!section ? (
          <p>
            Já tem uma conta? <button onClick={() => setSection(!section)}>Login</button>
          </p>
        ) : (
          <p>
            Não tem uma conta? <button onClick={() => setSection(!section)}>Registre-se</button>
          </p>
        )}
      </div>
    </div>
  );
}
