import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
// import { Link } from "react-router-dom";

const StyledButton = styled.button`
  border: none;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px;
  outline: none;
  cursor: pointer;
  background: ${(props) => {
    if (props.search) return "white";
    else return palette.gray[9];
  }};

  color: ${(props) => {
    if (props.search) return "black";
    else return "white";
  }};
  height: ${(props) => {
    if (props.search) return "4rem";
  }};
  border-radius: ${(props) => {
    if (props.search) return "0 4px 4px 0";
    else return "4px";
  }};
`;

// const StyledLink = styled(Link)`
//   ${buttonStyle}
// `;

const Button = (props) => {
  //   props를 입력받아서, props에 to가 있을경우 StyledLink ,
  //    StyledLink 사용할시 cyan 이 있으면 cyan값에대한 반환
  //   to가 없을경우 StyledButton 반환
  return <StyledButton {...props} />;
  //   return props.to ? (
  //     <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  //   ) : (
  //     <StyledButton {...props} />
  //   );
};

export default Button;
