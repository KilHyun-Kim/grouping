import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import AuthTemplate from "../components/auth/AuthTemplate";
import LoginForm from "../containers/auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <HeaderContainer type="login" logoType="로그인" />
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
