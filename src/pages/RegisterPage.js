import React from "react";
import Header from "../components/common/Header";
import AuthTemplate from "../components/auth/AuthTemplate";
import RegisterForm from "../containers/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <Header type="register" logoType="회원가입" />
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    </>
  );
};

export default RegisterPage;
