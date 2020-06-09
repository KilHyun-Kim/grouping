import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import PostListContainer from "../../../containers/posts/PostListContainer";
import PaginationContainer from "../../../containers/posts/PaginationContainer";

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
// const InformDate = styled.div`
//   width: 10%;
//   /* font-size: 1.5rem; */
// `;
// const InformTopic = styled.div`
//   width: 30%;
//   text-align: left;
// `;
// const InformCandidate = styled.div`
//   width: 15%;
//   font-size: 1.5rem;
//   padding: 0.7rem 0;
//   color: #fff;
//   border-radius: 5px;
//   background-color: ${palette.trafficLight[0]};
//   span {
//   }
// `;
// const InformRegion = styled.div`
//   width: 30%;
// `;

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
    <>
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default Information;
