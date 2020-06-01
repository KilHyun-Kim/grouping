import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import TopicSearchBlock from "./search/TopicSerchBlock";
import TopicInfo from "./info/TopicInfo";
import palette from "../../lib/styles/palette";
const TopicBlock = styled(Responsive)`
  width: 80%;
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
  color: ${palette.blue[0]};
  margin: 5rem auto 2rem;
  font-size: 2rem;
  h2 {
    margin: 0;
    letter-spacing: 1px;
  }
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
      <TopicSearchBlock />
      <TopicInfo />
    </TopicBlock>
  );
};

export default Topic;
