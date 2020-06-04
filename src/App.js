import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import WebPage from "./pages/WebPage";
import JobPage from "./pages/JobPage";
import WritePage from "./pages/WritePage";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";
import { Helmet } from "react-helmet-async";
function App() {
  return (
    // router 간단하게 표시하는법 다시
    <>
      {/* <Route component={MainPage} path="/" exact /> */}
      <Helmet>
        <title>GroupingPong</title>
      </Helmet>
      <Route component={WebPage} path="/web" exact />
      <Route component={JobPage} path="/web/designer" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostListPage} path={["/@:username", "/"]} exact />
    </>
  );
}

export default App;
