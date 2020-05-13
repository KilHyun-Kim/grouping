import React, { useState } from "react";
import styled from "styled-components";
const TopicSearchLi = styled.li`
  :nth-child(2) {
    border-left: 1px solid skyblue;
    border-right: 1px solid skyblue;
  }
`;

const TopicSearchButton = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  // const buttonStyledOff = {
  //   width: "100%",
  //   height: "100%",
  //   color: "white",
  //   padding: "5px",
  //   backgroundColor: "skyblue",
  //   cursor: "pointer",
  //   fontSize: "1rem",
  //   fontWeight: "bold",
  //   border: "0",
  //   outline: "0",
  // };
  // const buttonStyledOn = {
  //   width: "100%",
  //   height: "100%",
  //   color: "skyblue",
  //   padding: "5px",
  //   backgroundColor: "white",
  //   cursor: "pointer",
  //   fontSize: "1rem",
  //   fontWeight: "bold",
  //   border: "0",
  //   outline: "0",
  // };

  const SearchButtonOn = styled.button`
    width: 100%;
    height: 100%;
    color: skyblue;
    padding: 10px;
    background-color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    border: 0;
    outline: 0;
  `;

  const SearchButtonOff = styled.button`
    width: 100%;
    height: 100%;
    color: white;
    padding: 10px;
    background-color: skyblue;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    border: 0;
    outline: 0;
  `;
  const handleToggle = (e) => {
    setToggle(!toggle);
  };

  return (
    <TopicSearchLi className="search_section off">
      {!toggle ? (
        <SearchButtonOn onClick={handleToggle}>{children}</SearchButtonOn>
      ) : (
        <SearchButtonOff onClick={handleToggle}>{children}</SearchButtonOff>
      )}
    </TopicSearchLi>
  );
};

export default TopicSearchButton;

/**
 * TopicSearchLi 의 SearchButtonOn/Off 첫번째와 마지막에
 * border-top-left-radius
 * border-top-right-radius
 * 지정해주기 ( 안사라짐 )
 */
