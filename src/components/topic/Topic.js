import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import TopicSearchBlock from "./search/TopicSerchBlock";
import TopicInfo from "./info/TopicInfo";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
const TopicBlock = styled(Responsive)`
  width: 80%;
  height: auto;
  margin-top: 0.2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const TopicWrapper = styled.div`
  width: 90%;
  top: 5rem;
  color: ${palette.blue[0]};
  margin: 5rem auto 1rem;
  font-size: 3rem;
  display: flex;
  justify-content: space-between;
  h2 {
    margin: 0;
  }
`;

const Topic = ({ topic }) => {
  return (
    <TopicBlock>
      <TopicWrapper>
        <div className="topicMargin">
          <h2>{topic}</h2>
        </div>
        <div>
          <Button>글 등록하기</Button>
        </div>
      </TopicWrapper>
      <TopicSearchBlock />

      <TopicInfo />
    </TopicBlock>
  );
};

export default Topic;
