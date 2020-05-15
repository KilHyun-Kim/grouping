import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Responsive from "./Responsive";
import Navbar from "../navbar/Navbar";
// import palette from "../../lib/styles/palette";
// import Button from "./Button";

const HeaderBlock = styled.div`
  position: fixed;
  color: white;
  width: 100%;
  background: #4a69bd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  .logo {
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 20%;
  line-height: 4rem;

  height: 4rem;
  ._logoType {
    padding-left: 0.6rem;
    padding-top: 0.2rem;
    font-weight: bold;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가
 * 4rem 아래에 나타나게 해 주는 컴포넌트
 
 */

export const Spacer = styled.div`
  height: ${(props) => {
    if (props.doubleRem) return "8rem";
    else return "4rem";
  }};
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <LogoWrapper>
            <Link to="/" className="logo">
              Grouping
            </Link>
          </LogoWrapper>
          <Navbar />
          <div className="right">
            <UserInfo>길현이</UserInfo>
            {/* 로그인 버튼으로 바꾸기, link 넣어주기 */}
            <Link to="login">로그인</Link>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
