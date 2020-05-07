import React from "react";
import Header from "../components/common/Header";
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const LoginPage = () => {
  return (
    <>
      <Header type="login" logoType="로그인" />
      <AuthTemplate>
        <AuthForm type="login" />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
