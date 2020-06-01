import React from "react";
import TopicSearchButton from "./TopicSearchButton";
import styled from "styled-components";
import { FiMapPin } from "react-icons/fi";
import palette from "../../lib/styles/palette";

const TopicButtonUl = styled.ul`
  width: 100%;
  display: flex;
  border: 1px solid ${palette.blue[0]};
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
      <TopicSearchButton>경력</TopicSearchButton>
    </TopicButtonUl>
  );
};

export default TopicButtonList;
