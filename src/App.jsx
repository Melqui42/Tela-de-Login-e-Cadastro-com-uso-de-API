import React from "react";

import { IoMdClose } from "react-icons/io";

import { ButtonFirstType, ButtonSecondType } from "./Components/Button/Index";

import "./Style.scss";

export default function App() {
  const checkbox = React.useRef(false);
  const [section, setSection] = React.useState(false);

  function handleCreateCount() {
    if (section === false && checkbox.current === true) {
    } else if (section === true) {
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
        {!section ? (
          <div className="ContentUser">
            <input type="number" name="" placeholder="+99 99 9999-9999" />
            <input type="email" name="" placeholder="Insira um email" />
            <input type="password" name="" placeholder="Insira uma senha" />
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
            <input type="email" name="" placeholder="Insira um email" />
            <input type="password" name="" placeholder="Insira uma senha" />
          </div>
        )}
        <button className="Button" onClick={handleCreateCount}>
          {!section ? "Registre-se" : "Entrar"}
        </button>
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
