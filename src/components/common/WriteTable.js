import React from "react";
import styled from "styled-components";

const TableTag = styled.table`
  margin: 0 auto;
  font-size: 1.25rem;
  tr {
    color: #000;
  }
  td.div {
    overflow: auto;
  }
`;

const TableTr = styled.tr``;

const WriteTable = () => {
  return (
    <TableTag>
      <tr>
        <th colSpan="2">필수요구사항</th>
      </tr>
      <tr>
        <td>지역</td>
        <td>
          <ul>
            <li>
              <div>서울</div>
            </li>
            <li>
              <div>부산</div>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>모집인원</td>
        <td>1 2 3 4 5 6</td>
      </tr>
      <tr>
        <td>경력</td>
        <td>신입 1년이상 2년이상 3년이상 5년이상</td>
      </tr>
    </TableTag>
  );
};

export default WriteTable;
