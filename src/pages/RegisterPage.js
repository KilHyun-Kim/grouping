import React from "react";
import Header from "../components/common/Header";
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const RegisterPage = () => {
  return (
    <>
      <Header type="register" logoType="회원가입" />
      <AuthTemplate>
        <AuthForm type="register" />
      </AuthTemplate>
    </>
  );
};

export default RegisterPage;
