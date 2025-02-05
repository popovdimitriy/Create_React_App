import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Components/Counter/Counter";
import AppCurrency from "./Components/Currency_convertor/AppCurrency";
import Modal from "./Components/Modal_Window/Modal";
import AppQuiz from "./Components/Quiz/Quiz";
import AppUsers from "./Components/Users/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppUsers/>
    <Counter />
    <AppCurrency />
    <Modal />
    <AppQuiz />
  </React.StrictMode>
);
