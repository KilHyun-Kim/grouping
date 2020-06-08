import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const FirstBlockWrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  margin: 0.5rem;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  div {
    &:last-child {
      text-align: center;
      margin-left: 0;
    }
  }
`;
const InformDate = styled.div`
  /* font-size: 1.5rem; */
`;
const InformRegion = styled.div``;
const InformTopic = styled.div`
  text-align: left;
`;
const InformCandidate = styled.div`
  font-size: 1.5rem;
  padding: 0.7rem 0;
  color: #fff;
  border-radius: 5px;
  background-color: ${palette.trafficLight[0]};
  span {
  }
`;

const PostFirstBlock = ({ publishedDate, region, title, candidate }) => {
  return (
    <FirstBlockWrapper>
      <InformDate>{publishedDate}</InformDate>
      <InformRegion>{region}</InformRegion>
      <InformTopic>{title}</InformTopic>
      <InformCandidate>{candidate}</InformCandidate>
    </FirstBlockWrapper>
  );
};

export default PostFirstBlock;
