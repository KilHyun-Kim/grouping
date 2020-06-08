import React, { useState, useEffect } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { GrDown, GrUp } from "react-icons/gr";

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
  padding: 0.3rem;
`;
const RequiredMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const RequiredItemDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  ul {
    display: flex;
    overflow: auto;
    width: 50%;
    justify-content: space-around;
  }
  ul li {
    border: 1px solid ${palette.blue[0]};
    border-radius: 4px;
    padding: 0.3rem;
    color: ${palette.gray[6]};
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-between;
  }
  button {
    border: 0;
    background: white;
  }
`;

const RequiredItemTitle = styled.span`
  font-weight: bold;
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

  return (
    <TableTagBlock>
      <RequiredTitle>
        <span>필수사항</span>
      </RequiredTitle>
      <RequiredMain>
        <RequiredItemDiv>
          <RequiredItemTitle>지역</RequiredItemTitle>
          <ul>
            <li onClick={handleHidden}>
              <span>도시를 선택하세요</span>
              <button>
                <GrDown />
              </button>
            </li>
            <li onClick={handleHidden}>
              <span>구를 선택하세요</span>
              <button>
                <GrDown />
              </button>
            </li>
          </ul>
        </RequiredItemDiv>
        <RequiredItemDiv>
          <RequiredItemTitle>인원</RequiredItemTitle>
          <ul>
            <li>
              <span>모집인원을 선택하세요</span>
              <button>
                <GrDown />
              </button>
            </li>
          </ul>
        </RequiredItemDiv>
        <RequiredItemDiv>
          <RequiredItemTitle>경력</RequiredItemTitle>
          <ul>
            <li>
              <span>경력을 선택하세요</span>
              <button>
                <GrDown />
              </button>
            </li>
          </ul>
        </RequiredItemDiv>
      </RequiredMain>
    </TableTagBlock>
  );
};

export default WriteTable;
