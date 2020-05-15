import React from "react";
import styled from "styled-components";
import TopicRegion from "../region/TopicRegion";

const ScrollWrapper = styled.div`
  display: inline-block;
  height: 100%;
  overflow: auto;
  position: relative;
  border-bottom-left-radius: 4px;
  ::-webkit-scrollbar {
    width: 11px;
    background-color: #4a69bd;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 5px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #4a69bd;
  }
`;

const ScrollInnerBlock = styled.div`
  width: 100%;
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
