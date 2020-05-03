import React from "react";
import styled, { css } from "styled-components";
import Responsive from "../common/Responsive";
import img1 from "../../images/groupStudy6.jpg";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const SearchBlock = styled(Responsive)`
  width: 100%;
  height: 40rem;
  padding: 0;
  background-image: url(${img1});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  .inputMargin {
    display: flex;
    padding-top: 20%;
    text-align: center;
  }
`;

const SerachWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const awesomeCard = css`
  background-color: white;
  padding-left: 18px;
  border-radius: 5px 0 0 5px;
`;

const SearchInput = styled.input.attrs({
  placeholder: "Search for anything",
})`
  width: 100%;
  height: 4rem;
  font-size: 1.4rem;
  color: #000;
  border: 0;
  ${awesomeCard};
  &:focus {
    outline: none;
  }
`;
const SearchTagWrapper = styled.div`
  width: 100%;
  padding-top: 1rem;
  margin: 0 auto;
  ul {
    display: flex;

    a {
      margin-left: 20px;
      line-height: 30px;
      font-weight: bold;
      color: black;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SearchImage = styled.img.attrs({
  src: "https://static.thenounproject.com/png/3318552-200.png",
})`
  width: 30px;
  height: 30px;
`;
const HashImage = styled.img.attrs({
  src: "https://static.thenounproject.com/png/337475-200.png",
})`
  width: 30px;
  height: 30px;
`;

// const CheerUpTag = styled.div`
//   font-size: 4rem;
//   font-weight: bold;
//   padding-top: 2rem;
//   text-align: center;
//   font-family: "Nanum Gothic";
// `;

const Search = () => {
  return (
    <SearchBlock>
      <SerachWrapper>
        <div className="inputMargin">
          <SearchInput />
          {/* search styled-components 사용하기? */}
          <Button search>
            <SearchImage />
          </Button>
        </div>
        <SearchTagWrapper>
          <ul>
            <HashImage />
            {/* 해쉬태그 태깅 처리  */}
            <Link>토익</Link>
            <Link>프론트엔드</Link>
            <Link>웹 디자이너</Link>
            <Link>작가</Link>
          </ul>
        </SearchTagWrapper>
      </SerachWrapper>
    </SearchBlock>
  );
};

export default Search;
