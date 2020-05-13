import React from "react";
import styled from "styled-components";

// button common 사용해서 정리하여 만들어서 사용하기 공부 //

const GetListButton = styled.button`
  width: 10%;
  height: auto;
  padding: 1rem;
  border: 0;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: #0984e3;
  margin: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const IntroButton = () => {
  return (
    <div>
      <GetListButton>리스트 확인하기</GetListButton>
      <GetListButton>모집 글 쓰러가기</GetListButton>
    </div>
  );
};

export default IntroButton;
