import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { styled } from "./stitches.config";

const Button = styled("button", {
  width: 120,
  height: 42,
  fontSize: "$lg",
  backgroundColor: "$red",
  color: "green",

  "&:hover": {
    backgroundColor: "$yellow",
  },
});

function App() {
  return (
    <div className="App">
      <Button>Teste</Button>
    </div>
  );
}

export default App;
