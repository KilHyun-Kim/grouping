import React from "react";
import Header from "../components/common/Haeder";
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <AuthTemplate>
        <AuthForm type="register" />
      </AuthTemplate>
    </>
  );
};

export default RegisterPage;
