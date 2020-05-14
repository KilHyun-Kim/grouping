import React from "react";
import styled from "styled-components";

// button common 사용해서 정리하여 만들어서 사용하기 공부 //
// Link 태그로 만들어서 css 하기
const GetListButton = styled.button`
  cursor: pointer;
  width: 10%;
  height: auto;
  padding: 1rem;
  border: 0;
  border-radius: 5px;
  color: white;
  background-color: #6a89cc;
  font-weight: bold;
  margin: 10px;
  transition: 0.5s all ease-out;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background-color: white;
    color: #0984e3;
    font-weight: bold;
  }
`;

const IntroButton = () => {
  return (
    <div>
      <GetListButton>글 목록 확인하기</GetListButton>
      <GetListButton>모집 글 쓰러가기</GetListButton>
    </div>
  );
};

export default IntroButton;
