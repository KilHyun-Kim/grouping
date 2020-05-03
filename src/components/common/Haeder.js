import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Responsive from "./Responsive";
import palette from "../../lib/styles/palette";
import Button from "./Button";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
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
  .category {
    width: 50%;
    font-size: 1rem;
    font-weight: 800;
  }
  .category ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가
 * 4rem 아래에 나타나게 해 주는 컴포넌트
 
 */

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Haeder = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            Grouping
          </Link>
          <div className="category">
            <ul>
              <li>
                <Link to="region">직업별</Link>
              </li>
              <li>
                <Link to="job">자격증 </Link>
              </li>
              <li>
                <Link to="">어학</Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <UserInfo>길현이</UserInfo>
            <Button>로그인</Button>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Haeder;
