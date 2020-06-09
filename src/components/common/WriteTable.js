import React, { useState, useEffect } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { GrDown, GrUp } from "react-icons/gr";
import SelectInfo from "./SelectInfo";

const TableTagBlock = styled.div`
  margin: 0 auto;
  width: 100%;
  font-size: 0.9rem;
  color: ${palette.gray[8]};
`;

const TableTr = styled.tr``;

const RequiredTitle = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  /* padding: 0.3rem; */
`;
const RequiredMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const RequiredItemDiv = styled.div`
  display: flex;
  /* justify-content: space-around; */
  margin-bottom: 1rem;
  & + span {
    width: 10%;
  }
  ul {
    display: flex;
    overflow: auto;
    width: 80%;
    margin-left: 10%;
    justify-content: space-around;
  }
  ul li {
    width: 100%;

    /* display: flex;
    justify-content: space-between; */
  }
  ul li p {
    color: ${palette.gray[6]};
    font-size: 0.85rem;
  }
  select {
    padding: 0.3rem 0.3rem 0.6rem 0.3rem;
    color: ${palette.gray[6]};
    border-radius: 4px;
    border: 1px solid ${palette.blue[0]};
    width: 100%;
    font-size: 0.85rem;
  }
  option {
  }

  button {
    border: 0;
    background: white;
  }
`;

const RequiredItemTitle = styled.span`
  font-weight: bold;
  line-height: 200%;
`;

const WriteTable = () => {
  const [hidden, setHidden] = useState(false);

  const handleHidden = () => {
    setHidden({
      hidden: !hidden,
    });
  };

  useEffect(() => {
    console.log(hidden);
  }, [hidden]);

  const Information = {
    city: ["지역을 선택하세요.", "서울", "경기", "부산", "제주"],
    region: ["구를 선택하세요.", "강남구", "종로구", "동작구"],
    peoples: [
      "인원을 선택하세요.",
      "1명 이하",
      "2명 이하",
      "3명 이하",
      "4명 이하",
      "5명 이하",
      "5명 이상",
    ],
    career: [
      "경력을 선택하세요.",
      "신입",
      "1년 이하",
      "2년 이하",
      "3년 이하",
      "3년 이상",
    ],
  };

  return (
    <TableTagBlock>
      <RequiredTitle>
        <span>필수입력사항</span>
      </RequiredTitle>
      <RequiredMain>
        <RequiredItemDiv>
          <RequiredItemTitle>지역</RequiredItemTitle>
          <ul>
            <li>
              <SelectInfo value={Information.city} />
            </li>

            <li>
              <SelectInfo value={Information.region} />
            </li>
          </ul>
        </RequiredItemDiv>
        <RequiredItemDiv>
          <RequiredItemTitle>인원</RequiredItemTitle>
          <ul>
            <li>
              <SelectInfo value={Information.peoples} />
            </li>
          </ul>
        </RequiredItemDiv>
        <RequiredItemDiv>
          <RequiredItemTitle>경력</RequiredItemTitle>
          <ul>
            <li>
              <SelectInfo value={Information.career} />
            </li>
          </ul>
        </RequiredItemDiv>
        <RequiredItemDiv>
          <RequiredItemTitle>기간</RequiredItemTitle>
          <ul>
            <li>
              <p>＊게시글 유지 기간은 1개월 입니다.</p>
              <p>＊그 이후에 또 구할려면 또쓰셈ㅋ 깔깔</p>
            </li>
          </ul>
        </RequiredItemDiv>
      </RequiredMain>
    </TableTagBlock>
  );
};

export default WriteTable;
