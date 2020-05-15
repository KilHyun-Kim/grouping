import React from "react";
import styled from "styled-components";

const CheckBoxBlock = styled.div`
  display: flex;
  input[type="checkbox"] {
    -ms-transform: scale(1.5); /* IE */
    -moz-transform: scale(1.5); /* FF */
    -webkit-transform: scale(1.5); /* Safari and Chrome */
    -o-transform: scale(1.5); /* Opera */
    padding: 10px;
    background-color: #fff;
    cursor: pointer;
    border: 1px solid #cacece;
  }
  span {
    height: 100%;
    font-size: 0.9rem;
  }
`;

const CheckBoxLi = styled.li`
  display: inline-block;
  width: 30%;
`;

const TopicCheckBoxBlock = () => {
  const areas = {
    seoul: [
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구",
    ],
    gyeonggi: {},
    incheon: {},
    busan: {},
  };
  const areaList = areas.seoul.map((area, index) => (
    <CheckBoxLi>
      <input type="checkbox" id={index} />
      <label for={index}>
        <span>{area}</span>
      </label>
    </CheckBoxLi>
  ));
  return (
    <CheckBoxBlock>
      <ul>{areaList}</ul>
    </CheckBoxBlock>
  );
};

export default TopicCheckBoxBlock;
