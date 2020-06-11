import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import palette from "../../../lib/styles/palette";
const RegionLi = styled.li`
  width: 50%;
  display: inline-block;
  margin: 0.3rem 0;
`;
const RegionButton = styled.button`
  width: 100%;
  border: 0;
  background-color: white;
  text-align: left;
  color: #333;
  display: flex;
  font-size: 1rem;
  justify-content: space-around;
  .invisiable {
    visibility: hidden;
  }
  .visiable {
    visibility: visible;
  }
`;

const TopicRegion = () => {
  const [regions, setRegions] = useState([
    { id: 1, city: "서울" },
    { id: 2, city: "경기" },
    { id: 3, city: "인천" },
    { id: 4, city: "부산" },
    { id: 5, city: "대구" },
    { id: 6, city: "광주" },
    { id: 7, city: "대전" },
    { id: 8, city: "울산" },
    { id: 9, city: "세종" },
    { id: 10, city: "강원" },
    { id: 11, city: "경남" },
    { id: 12, city: "경북" },
    { id: 13, city: "전남" },
    { id: 14, city: "전북" },
    { id: 15, city: "충남" },
    { id: 16, city: "충북" },
    { id: 17, city: "제주" },
    { id: 18, city: "전국" },
  ]);
  const [toggle, setToggle] = useState(false);
  //   const regions = [
  //     "서울",
  //     "경기",
  //     "인천",
  //     "부산",
  //     "대구",
  //     "광주",
  //     "대전",
  //     "울산",
  //     "세종",
  //     "강원",
  //     "경남",
  //     "경북",
  //     "전남",
  //     "전북",
  //     "충남",
  //     "충북",
  //     "제주",
  //     "전국",
  //   ];
  const handleToggle = (e) => {
    console.log(e.target);
    const target = e.target.childNodes[1];
    if (toggle) {
      setToggle(!toggle);
      target.classList = "invisiable";
    } else {
      target.classList = "visiable";

      setToggle(!toggle);
    }
  };

  /**
   * toggle 을 하나하나 다주고, 값을 바꿔줘야함;
   * 다른것들이 true일때 나머지는 false ,
   * */

  const regionList = regions.map((region) => (
    <RegionLi key={region.id}>
      <RegionButton onClick={handleToggle}>
        {region.city}
        <AiOutlineRight className="invisiable" />
      </RegionButton>
    </RegionLi>
  ));
  return <ul>{regionList}</ul>;
};

export default TopicRegion;
