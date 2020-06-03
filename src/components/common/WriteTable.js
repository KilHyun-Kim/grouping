import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const TableTagBlock = styled.div`
  margin: 0 auto;
  width: 100%;
  font-size: 1.25rem;
  color: ${palette.gray[8]};
`;

const TableTr = styled.tr``;

const WriteTable = () => {
  return (
    <TableTagBlock>
      <div
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}
      >
        선택하세요
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "inline-block" }}>
          <ul style={{ display: "flex" }}>
            <li>지역</li>
            <li>서울</li>
          </ul>
        </div>
        <div style={{ display: "inline-block" }}>
          <ul style={{ display: "flex" }}>
            <li>모집인원</li>
            <li>5명 이하</li>
          </ul>
        </div>
        <div style={{ display: "inline-block" }}>
          <ul style={{ display: "flex" }}>
            <li>경력</li>
            <li>1년이상</li>
          </ul>
        </div>
      </div>
    </TableTagBlock>
  );
};

export default WriteTable;
