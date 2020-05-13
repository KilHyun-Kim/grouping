import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import WebPage from "./pages/WebPage";
import WebDesignerPage from "./pages/WebDesignerPage";

function App() {
  return (
    // router 간단하게 표시하는법 다시
    <>
      <Route component={MainPage} path="/" exact />
      <Route component={WebPage} path="/web" />
      <Route component={WebDesignerPage} path="/web/webdesigner" />
      {/* <Route component={} path="/@:username" exact />*/}
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
    </>
  );
}

export default App;
