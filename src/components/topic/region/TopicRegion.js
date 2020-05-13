import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
const RegionLi = styled.li`
  width: 50%;
  display: inline-block;
`;
const RegionButton = styled.button`
  width: 100%;
  border: 0;
  background-color: white;
  text-align: left;
  padding: 0%;
  display: flex;
  font-size: 0.8rem;
  justify-content: space-around;
  .invisiable {
    display: none;
  }
  .visiable {
    display: block;
  }
`;

const TopicRegion = () => {
  const [regions, setRegions] = useState([
    { id: 1, city: "서울" },
    { id: 2, city: "경기" },
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
      target.classList = "visiable";
    } else {
      target.classList = "invisiable";
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
        <AiOutlineRight className="unvisiable" />
      </RegionButton>
    </RegionLi>
  ));
  return <ul>{regionList}</ul>;
};

export default TopicRegion;
