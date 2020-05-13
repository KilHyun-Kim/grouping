import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
const CategoryUl = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const CategoryLi = styled.li`
  text-align: center;
  position: relative;
  a {
    font-size: 1rem;
  }
  &:hover div {
    display: block;
  }
`;

const HoverCategoryWrapper = styled.div`
  display: none;
  /* margin-top: 1.4rem; */
  position: absolute;
  width: 150px;
  left: -40px;
  top: 4rem;
  border-left: 1px solid skyblue;
  border-right: 1px solid skyblue;
`;
const HoverCategory = styled.ul`
  color: skyblue;

  li {
    background-color: white;
    text-align: center;
    border-bottom: 1px solid skyblue;
  }
  li a {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 0.9rem;
  }
  li:hover {
    background-color: skyblue;
    color: white;
  }
`;

//  ↓ map 함수 사용하여 간단하게 정리하기 (컴포넌트 나누기)
const Navbar = () => {
  return (
    <CategoryWrapper>
      <CategoryUl>
        <CategoryLi>
          <Link to="/web">웹 스터디</Link>
          <HoverCategoryWrapper>
            <HoverCategory className="NavOff">
              <li>
                <Link to="/web/designer">웹 디자이너</Link>
              </li>
              <li>
                <Link to="/web/frontend">프론트 엔드</Link>
              </li>
              <li>
                <Link to="/web/backend">백 엔드</Link>
              </li>
            </HoverCategory>
          </HoverCategoryWrapper>
        </CategoryLi>
      </CategoryUl>
      <CategoryUl>
        <CategoryLi>
          <Link to="/job">프로젝트</Link>
          <HoverCategoryWrapper>
            <HoverCategory className="NavOff">
              <li>
                <Link>사람 구해요</Link>
              </li>
              <li>
                <Link>팀 찾아요</Link>
              </li>
            </HoverCategory>
          </HoverCategoryWrapper>
        </CategoryLi>
      </CategoryUl>
      <CategoryUl>
        <CategoryLi>
          <Link to="/job">스펙업</Link>
          <HoverCategoryWrapper>
            <HoverCategory className="NavOff">
              <li>
                <Link>토익</Link>
              </li>
              <li>
                <Link>토플</Link>
              </li>
              <li>
                <Link>오픽</Link>
              </li>
            </HoverCategory>
          </HoverCategoryWrapper>
        </CategoryLi>
      </CategoryUl>
    </CategoryWrapper>
  );
};

export default Navbar;
