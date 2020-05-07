import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import JobPage from "./pages/JobPage";

function App() {
  return (
    <>
      <Route component={MainPage} path="/" exact />
      <Route component={JobPage} path="/job" />
      {/* <Route component={} path="/@:username" exact />*/}
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
    </>
  );
}

export default App;
