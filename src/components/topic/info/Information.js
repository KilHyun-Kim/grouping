import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";

const InformBlock = styled.div`
  padding: 1rem;
  margin: 1rem;
  border-bottom: 1px solid #efefef;
  box-shadow: rgb(204, 204, 204) 0px 10px 20px;
  display: flex;
  &:hover {
    /* transition 추가 */
  }
  p {
    font-size: 1.5rem;
  }
`;
const InformFirstBlock = styled.div`
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

const InformSecondBlock = styled.div`
  width: 90%;
  display: flex;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
  color: #8395a7;
  div {
    margin-left: 5%;
    &:first-child {
      margin-left: 0%;
    }
  }
`;
// FirstBlock
const InformDate = styled.div`
  width: 10%;
  /* font-size: 1.5rem; */
`;
const InformTopic = styled.div`
  width: 30%;
  text-align: left;
`;
const InformCandidate = styled.div`
  width: 15%;
  font-size: 1.5rem;
  padding: 0.7rem 0;
  color: #fff;
  border-radius: 5px;
  background-color: ${palette.trafficLight[0]};
  span {
  }
`;
const InformRegion = styled.div`
  width: 30%;
`;

const GrayBar = styled.span`
  margin: 0 7px;
  display: inline-block;
  border-radius: 1px;
  width: 2px;
  height: 12px;
  background-color: #ccc;
`;

// SecondBlock
const InformTech = styled.div``;
const InformDead = styled.div``;
const InformPlace = styled.div``;
const Information = () => {
  return (
    <InformBlock>
      <div style={{ width: "5%", textAlign: "center", paddingTop: "3rem" }}>
        <span>1</span>
      </div>
      <div style={{ width: "95%" }}>
        <InformFirstBlock>
          <InformDate>
            <span>5/15</span>
          </InformDate>
          <InformRegion>
            <span>서울 장똘배기</span>
          </InformRegion>
          <InformTopic>
            <span>#포토샵 #드로잉</span>
          </InformTopic>
          <InformCandidate>
            <span>1 / 5</span>
          </InformCandidate>
        </InformFirstBlock>
        <InformSecondBlock>
          <InformDead>
            <span>모집 기간 : 5/16~5/17</span>
          </InformDead>
          <InformTech>
            <span>사용 기술 : PhotoShop</span>
            <GrayBar />
            <span>경력 : 신입</span>
          </InformTech>
          {/* <InformPlace>
            <span>위치: 어디어디어디</span>
          </InformPlace> */}
        </InformSecondBlock>
      </div>
    </InformBlock>
  );
};

export default Information;
