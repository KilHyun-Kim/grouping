import React from "react";
import styled from "styled-components";
import TopicRegion from "../region/TopicRegion";
import palette from "../../../lib/styles/palette";

const ScrollWrapper = styled.div`
  width: 30%;
  display: inline-block;
  height: 100%;
  overflow: auto;
  position: relative;
  border-bottom-left-radius: 4px;

  ::-webkit-scrollbar {
    width: 11px;
    background-color: ${palette.blue[0]};
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 5px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: ${palette.blue[0]};
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
