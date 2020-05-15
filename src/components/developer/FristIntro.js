import React from "react";
import styled from "styled-components";
const WebFristPageWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 9rem 0;
  height: 41rem;
  color: #4a69bd;
  background-color: #fff;
  text-align: center;
  animation-name: up;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-duration: 2s;
  @keyframes up {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  h1 {
    transition: all ease 2s 0s;
    font-size: 5rem;
    margin: 0;
    padding-bottom: 2rem;
  }
  h2 {
    margin: 0;
    font-size: 1.3rem;
    color: #4a69bd;
  }
`;

const NavigatorDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  a {
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const FristIntro = () => {
  return (
    <WebFristPageWrapper>
      {/* <h1>Web Study</h1> */}
      <h1>What is our Web Study?</h1>
      {/* 나중에 정리하기 */}
      <h2>Grouping은 같은 목적을 가진 사람들을 모아줍니다.</h2>
      <h2>스터디원들은 각 직군의 스킬이 향상됩니다.</h2>
      <NavigatorDiv>
        {/* 클릭시 화면 height 이동하기 */}
        <p>웹 디자이너</p>
        <p>프론트엔드</p>
        <p>백엔드</p>
      </NavigatorDiv>
    </WebFristPageWrapper>
  );
};

export default FristIntro;
