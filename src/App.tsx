import React from "react";
import Routes from "./Routes";
import { useHistory } from "react-router-dom"
import "./App.css";

function App() {
  const history = useHistory()
  return (
    <>
     {console.log(history)}
      <Routes></Routes>
    </>
  );
}

export default App;
