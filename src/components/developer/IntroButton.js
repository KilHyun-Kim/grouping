import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

// button common 사용해서 정리하여 만들어서 사용하기 공부 //
// Link 태그로 만들어서 css 하기

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const IntroButton = (props) => {
  return (
    <ButtonWrapper>
      <Button to={props.path1}>글 목록 확인하기</Button>
      <Button to={props.path2}>모집 글 쓰러가기</Button>
    </ButtonWrapper>
  );
};

export default IntroButton;
