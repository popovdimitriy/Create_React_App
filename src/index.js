import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Components/Counter/Counter";
import AppCurrency from "./Components/Currency_convertor/AppCurrency";
import Modal from "./Components/Modal_Window/Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counter />
    <AppCurrency />
    <Modal />
  </React.StrictMode>
);
