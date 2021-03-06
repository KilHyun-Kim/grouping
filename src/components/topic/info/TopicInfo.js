import React from "react";
import styled from "styled-components";
import Infomation from "./Information";
import palette from "../../../lib/styles/palette";

const INFO_SORT_NUM = "글번호";
const INFO_TITLE = "작성일";
const INFO_REGITON = "지역";
const INFO_CANDIDATE = "참여현황";

const InfoWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  border-radius: 5px;
  padding-bottom: 15rem;
  border: 1px solid ${palette.blue[0]};
`;

const InfoListHead = styled.div`
  width: 100%;
  height: 4rem;
  background-color: ${palette.blue[0]};
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  font-size: 1.125rem;
  font-weight: bold;
  color: ${palette.white[0]};
  /* span:nth-child(1) {
    width: 10%;
  }
  span:nth-child(2) {
    width: 10%;
  }
  span:nth-child(3) {
    width: 50%;
  }
  span:nth-child(4) {
    width: 30%;
  } */
`;

const TopicInfo = () => {
  return (
    <InfoWrapper>
      <InfoListHead>
        <span>{INFO_SORT_NUM}</span>
        <span>{INFO_TITLE}</span>
        <span>{INFO_REGITON}</span>
        <span>{INFO_CANDIDATE}</span>
      </InfoListHead>
      <Infomation />
    </InfoWrapper>
  );
};

export default TopicInfo;
