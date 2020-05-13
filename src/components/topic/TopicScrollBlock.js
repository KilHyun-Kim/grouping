import React from "react";
import styled from "styled-components";
import TopicRegion from "./region/TopicRegion";

const ScrollWrapper = styled.div`
  height: 100%;
  width: 33.7%;
  overflow: auto;
  position: relative;
  border-bottom-left-radius: 4px;
  ::-webkit-scrollbar {
    width: 11px;
    background-color: skyblue;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 5px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: skyblue;
  }
`;

const ScrollInnerBlock = styled.div`
  width: 100%;
  height: 300px;
  background: white;
`;

const TopicScrollBlock = () => {
  return (
    <ScrollWrapper>
      <ScrollInnerBlock>
        <TopicRegion />
      </ScrollInnerBlock>
    </ScrollWrapper>
  );
};

export default TopicScrollBlock;
