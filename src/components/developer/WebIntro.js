import React from "react";
import styled from "styled-components";
import IntroButton from "./IntroButton";

const WebIntroWrapper = styled.div`
  display: block;
  width: 100%;
  height: 41rem;
  background-size: 100% 100%;
`;

const WebIntroDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-left: 5rem;
  height: 41rem;

  h1,
  h2 {
    color: white;
  }
`;
const WebTopic = styled.div`
  font-size: 7.5rem;
  padding-top: 5rem;
  padding-bottom: 3rem;
  color: white;
`;

const WebIntro = ({ backImage, Topic, express, tech, path1, path2 }) => {
  return (
    <WebIntroWrapper style={backImage}>
      <WebIntroDiv>
        <WebTopic>{Topic}</WebTopic>
        <h1>{express}</h1>
        <h2>{tech}</h2>
        <IntroButton path1={path1} path2={path2} />
      </WebIntroDiv>
    </WebIntroWrapper>
  );
};

export default WebIntro;
