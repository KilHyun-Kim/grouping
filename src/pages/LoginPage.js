import React from "react";
import Header from "../components/common/Haeder";
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const LoginPage = () => {
  return (
    <>
      <Header />
      <AuthTemplate>
        <AuthForm type="login" />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
