import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import TopicButtonList from "./TopicButtonList";

const TopicBlock = styled(Responsive)`
  width: 100%;
  height: auto;
  margin-top: 0.2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  .topicMargin {
    text-align: center;
    padding-right: 65%;
  }
`;

const TopicWrapper = styled.div`
  width: 100%;
  height: 2rem;
  top: 5rem;
  margin: 5rem auto 0;
  h2 {
    margin: 0;
    letter-spacing: 1px;
  }
`;

const TopicSearchBlock = styled.div`
  width: 100%;
  height: auto;
  margin-top: 4rem;
`;

const TopicSearchWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 3.5rem;
  margin: 0 auto;
`;

const TopicSearchDivBox = styled.div`
  border: 1px solid #000;
  width: 80%;
  margin: 0 auto;
  height: 18rem;
`;

// event 함수

// const onMouseSearchEnter = (e) => {
//   const buttonTarget = e.target;
// };

// const onMouseSearchLeave = (e) => {
//   const buttonTarget = e.target;
//   buttonTarget.style.backgroundColor = "white";
//   buttonTarget.style.color = "skyblue";
//   buttonTarget.style.fontSize = "1rem";
//   buttonTarget.style.fontWeight = "bold";
// };

const Topic = ({ topic }) => {
  return (
    <TopicBlock>
      <TopicWrapper>
        <div className="topicMargin">
          <h2>{topic}</h2>
        </div>
      </TopicWrapper>
      <TopicSearchBlock>
        <TopicSearchWrapper>
          <TopicButtonList />
        </TopicSearchWrapper>
        <TopicSearchDivBox></TopicSearchDivBox>
      </TopicSearchBlock>
    </TopicBlock>
  );
};

export default Topic;
