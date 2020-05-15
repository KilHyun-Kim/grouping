import React from "react";
import styled from "styled-components";
import Infomation from "./Information";

const InfoWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  border-radius: 5px;
  padding-bottom: 15rem;
  border: 1px solid #4a69bd;
`;

const InfoListHead = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #4a69bd;
  display: flex;
`;

const TopicInfo = () => {
  return (
    <InfoWrapper>
      <InfoListHead />
      <Infomation />
    </InfoWrapper>
  );
};

export default TopicInfo;
