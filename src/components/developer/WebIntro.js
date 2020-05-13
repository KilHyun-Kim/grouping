import React from "react";
import styled from "styled-components";
import IntroButton from "./IntroButton";

const WebIntroWrapper = styled.div`
  display: block;
  width: 100%;
  height: 41rem;
  background-size: 100% 100%;
  z-index: -1;
`;

const WebIntroDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  h1,
  h2 {
    color: skyblue;
    margin-left: 2rem;
    text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
  }
`;
const WebTopic = styled.div`
  font-size: 7.5rem;
  padding-top: 5rem;
  padding-bottom: 3rem;
  color: white;

  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
`;

const WebIntro = ({ backImage, Topic, express, tech }) => {
  return (
    <WebIntroWrapper style={backImage}>
      <WebIntroDiv>
        <WebTopic>{Topic}</WebTopic>
        <h1>{express}</h1>
        <h2>{tech}</h2>
        <IntroButton />
      </WebIntroDiv>
    </WebIntroWrapper>
  );
};

export default WebIntro;
