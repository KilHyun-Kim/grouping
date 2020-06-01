import React from "react";
import styled from "styled-components";
// import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

/**
 * 회원가입 / 로그인 페이지의 레이아웃 컴포넌트
 */

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 4.3rem;
  bottom: 0;
  right: 0;
  background: #fff;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 5px;
    font-size: 2rem;
    text-transform: uppercase;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  padding: 4rem;
  width: 400px;
  background: #fff;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">{children.props.type}</div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
