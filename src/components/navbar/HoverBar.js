import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  border-left: 1px solid #4a69bd;
  border-right: 1px solid #4a69bd;
`;

const HoverCategory = styled.ul`
  color: #4a69bd;

  li {
    background-color: white;
    text-align: center;
    border-bottom: 1px solid #4a69bd;
  }
  li a {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 0.9rem;
  }
  li:hover {
    background-color: #4a69bd;
    color: white;
  }
`;

const HoverBar = ({ allLink, subject, link1, link2, link3 }) => {
  return (
    <CategoryUl>
      <CategoryLi>
        <Link to={allLink}>{subject}</Link>
        <HoverCategoryWrapper>
          <HoverCategory className="NavOff">
            <li>
              <Link to="/web/designer">{link1}</Link>
            </li>
            <li>
              <Link to="/web/frontend">{link2}</Link>
            </li>
            <li>
              <Link to="/web/backend">{link3}</Link>
            </li>
          </HoverCategory>
        </HoverCategoryWrapper>
      </CategoryLi>
    </CategoryUl>
  );
};

export default HoverBar;
