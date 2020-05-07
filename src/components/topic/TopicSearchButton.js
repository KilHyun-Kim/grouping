import React, { useState } from "react";
import styled from "styled-components";
const TopicSearchLi = styled.li``;

const TopicSearchButton = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const buttonStyledOff = {
    width: "100%",
    height: "100%",
    border: "1px solid skyblue",
    color: "white",
    padding: "5px",
    borderRadius: "4px",
    backgroundColor: "skyblue",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
  };
  const buttonStyledOn = {
    width: "100%",
    height: "100%",
    border: "1px solid skyblue",
    color: "skyblue",
    padding: "5px",
    borderRadius: "4px",
    backgroundColor: "rgba(0,0,0,0)",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
  };

  const handleToggle = (e) => {
    const liOnClick = e.target.parentNode;
    setToggle(!toggle);

    if (!toggle) {
      liOnClick.className = "search_section on";
      // setToggleState(!toggleState);
    } else {
      liOnClick.className = "search_section off";
      // setToggleState(toggleState);

      // liOnClick.parentNode.className = "ultagoff";
      // setToggleState(!toggleState);
      // console.log(toggleState);
    }
  };

  // const onMouseSearchOnClick = (e) => {
  //   const buttonOnClick = e.target;
  //   buttonOnClick.style.backgroundColor = "skyblue";
  //   buttonOnClick.style.color = "white";
  //   buttonOnClick.style.fontSize = "1.1rem";
  //   buttonOnClick.style.fontWeight = "700";

  //   // this.setToggle({
  //   //   toggle: !toggle,
  //   // });
  // };

  return (
    <TopicSearchLi className="search_section off">
      <button
        style={!toggle ? buttonStyledOn : buttonStyledOff}
        // onMouseEnter={onMouseSearchEnter}
        // onMouseLeave={onMouseSearchLeave}
        onClick={handleToggle}
      >
        {children}
      </button>
    </TopicSearchLi>
  );
};

export default TopicSearchButton;
