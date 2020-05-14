import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HoverBar from "./HoverBar";
const CategoryWrapper = styled.div`
  width: 40%;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  text-align: center;
  font-weight: 800;
  > ul {
    line-height: 4rem;
  }
`;

//  ↓ map 함수 사용하여 간단하게 정리하기 (컴포넌트 나누기)
const Navbar = () => {
  return (
    <CategoryWrapper>
      <HoverBar
        allLink="/web"
        subject="웹 스터디"
        link1="웹 디자이너"
        link2="프론트 엔드"
        link3="백 엔드"
      />
      <HoverBar
        allLink="/job"
        subject="프로젝트"
        link1="사람 구해요"
        link2="팀 찾아요"
      />
      <HoverBar
        allLink="/job"
        subject="스펙업"
        link1="토익"
        link2="토플"
        link3="오픽"
      />
    </CategoryWrapper>
  );
};

export default Navbar;
