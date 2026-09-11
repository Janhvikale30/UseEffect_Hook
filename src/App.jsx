import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import UseEffectHook from "./Components/UseEffectHook";
import Addition from "./Components/Addition";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <UseEffectHook />
      <Addition />
    </>
  );
}

export default App;
