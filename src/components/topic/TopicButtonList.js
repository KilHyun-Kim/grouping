import React from "react";
import TopicSearchButton from "./TopicSearchButton";
import styled from "styled-components";

const TopicButtonUl = styled.ul`
  width: 100%;
  display: flex;
  .search_section {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const TopicButtonList = () => {
  return (
    <TopicButtonUl>
      <TopicSearchButton>지역 선택</TopicSearchButton>
      <TopicSearchButton>직업 선택</TopicSearchButton>
      <TopicSearchButton>검색어</TopicSearchButton>
    </TopicButtonUl>
  );
};

export default TopicButtonList;
