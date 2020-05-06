import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import { Link } from "react-router-dom";

/**
 * 회원가입 또는 로그인 폼을 보여 준다.
 */
const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 90%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌
 */

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWidthMarginTop = styled(Button)`
  margin-top: 1rem;
`;

// const textMap = {
//   login: "로그인",
//   register: "회원가입",
// };

/**
 * 에러를 보여준다.
 */

// const ErrorMessage = styled.div`
//   color: red;
//   text-align: center;
//   font-size: 0.875rem;
//   margin-top: 1rem;
// `;

const AuthForm = ({ type }) => {
  console.log(type);
  return (
    <AuthFormBlock>
      {/* <h3>로그인</h3> */}
      <form>
        <StyledInput placeholder="아이디" />
        <StyledInput placeholder="비밀번호" />
        {type === "register" && <StyledInput placeholder="비밀번호 확인" />}
        {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
        {type === "register" ? (
          <ButtonWidthMarginTop>회원등록</ButtonWidthMarginTop>
        ) : (
          <ButtonWidthMarginTop>로그인</ButtonWidthMarginTop>
        )}
      </form>
      <Footer>
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
