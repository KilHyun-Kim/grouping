import React from "react";
import styled from "styled-components";
import { FiMapPin } from "react-icons/fi";
import palette from "../../lib/styles/palette";

const SearchButtonOn = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 10px;
  background-color: ${palette.blue[0]};
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  border: 0;
  outline: 0;
  text-align: center;
  line-height: 200%;
`;

const TopicButtonList = () => {
  return (
    <SearchButtonOn>
      <FiMapPin />
      지역 선택
    </SearchButtonOn>
  );
};

export default TopicButtonList;
