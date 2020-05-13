import React from "react";
import TopicSearchButton from "./TopicSearchButton";
import styled from "styled-components";
import { FiMapPin } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

const TopicButtonUl = styled.ul`
  width: 100%;
  display: flex;
  border: 1px solid skyblue;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  .search_section {
    width: 100%;
    padding: 0;
    list-style: none;
  }
`;

const TopicButtonList = () => {
  return (
    <TopicButtonUl>
      <TopicSearchButton>
        <FiMapPin />
        지역 선택
      </TopicSearchButton>
      <TopicSearchButton>직업 선택</TopicSearchButton>
      <TopicSearchButton>
        <IoIosSearch />
        검색어
      </TopicSearchButton>
    </TopicButtonUl>
  );
};

export default TopicButtonList;
