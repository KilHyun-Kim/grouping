import React from "react";
import styled from "styled-components";
import TopicButtonList from "../TopicButtonList";
import TopicScrollBlock from "./TopicScrollBlock";
import TopicCheckBoxBlock from "../region/TopicCheckBoxBlock";
// import SearchButton from "./SearchButton";
// import TopicCareerBlock from "./TopicCareerBlock";
import palette from "../../../lib/styles/palette";
import Button from "../../common/Button";

const SearchBlock = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem;
`;

const TopicSearchWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  margin: 0 auto;
`;

const TopicSearchDivBox = styled.div`
  display: flex;
  border: 1px solid ${palette.blue[0]};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 100%;
  margin: 0 auto;
  height: 13rem;
  color: #111;
`;

const TopicSearchButtonBlock = styled.div`
  text-align: right;
  margin-top: 1rem;
`;

const SearchButton = styled(Button)``;

const TopicSerchBlock = () => {
  return (
    <SearchBlock>
      <TopicSearchWrapper>
        <TopicButtonList />
      </TopicSearchWrapper>
      <TopicSearchDivBox>
        <TopicScrollBlock />
        <TopicCheckBoxBlock />
        {/* <TopicCareerBlock /> */}
      </TopicSearchDivBox>
      <TopicSearchButtonBlock>
        <SearchButton>검색하기</SearchButton>
      </TopicSearchButtonBlock>
    </SearchBlock>
  );
};

export default TopicSerchBlock;
