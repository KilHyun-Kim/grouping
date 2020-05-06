import React from "react";
import styled, { css } from "styled-components";
import Responsive from "../common/Responsive";
import img1 from "../../images/groupStudy1.jpg";
import img2 from "../../images/groupStudy2.jpg";
import img3 from "../../images/groupStudy3.jpg";
import img4 from "../../images/groupStudy4.jpg";
import img5 from "../../images/groupStudy5.jpg";
import img6 from "../../images/groupStudy6.jpg";
import img7 from "../../images/groupStudy7.jpg";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const SearchBlock = styled(Responsive)`
  width: 100%;
  height: 41rem;
  padding: 0;
  background-size: 100% 100%;
  background-color: #dfe4ea;
  display: flex;
  flex-direction: column;
  .inputMargin {
    display: flex;
    padding-top: 20%;
    text-align: center;
  }

  animation: fadeIn 1s linear;

  @keyframes fadeIn {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
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
  padding: 3px;
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

// 새로고침 시 Random 이미지

const IMG_NUM = 7;

const getRanNum = () => {
  const ranNumber = Math.floor(Math.random() * IMG_NUM) + 1;
  return ranNumber;
};
const imageSeq = (ranNum) => {
  const imgArr = [img1, img2, img3, img4, img5, img6, img7];
  for (let i = 1; i < IMG_NUM + 1; i++) {
    if (ranNum === i) {
      return imgArr[i - 1];
    }
  }
};

const Search = () => {
  const randomNumber = getRanNum();
  const ranImgSrc = imageSeq(randomNumber);
  const backImgSrc = {
    backgroundImage: `url(${ranImgSrc})`,
  };

  return (
    <SearchBlock style={backImgSrc}>
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
            <Link to="">토익</Link>
            <Link to="">프론트엔드</Link>
            <Link to="">웹 디자이너</Link>
            <Link to="">작가</Link>
          </ul>
        </SearchTagWrapper>
      </SerachWrapper>
    </SearchBlock>
  );
};

export default Search;
