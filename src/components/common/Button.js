import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

const buttonStyle = css`
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  transition: 0.5s all ease-out;
  text-align: center;
  background-color: ${palette.blue[0]};
  &:hover {
    background-color: ${palette.gray[1]};
    color: ${palette.blue[0]};
  }
  &:disabled {
    background: ${palette.blue[0]};
    color: ${palette.white[0]};
    cursor: not-allowed;
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.box &&
    css`
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;
const StyledLink = styled(Link)`
  ${buttonStyle}
`;

// const StyledLink = styled(Link)`
//   ${buttonStyle}
// `;

const Button = (props) => {
  //   props를 입력받아서, props에 to가 있을경우 StyledLink ,
  //    StyledLink 사용할시 cyan 이 있으면 cyan값에대한 반환
  //   to가 없을경우 StyledButton 반환
  return props.to ? (
    <StyledLink {...props} box={props.box ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
  //   return props.to ? (
  //     <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  //   ) : (
  //     <StyledButton {...props} />
  //   );
};

export default Button;
