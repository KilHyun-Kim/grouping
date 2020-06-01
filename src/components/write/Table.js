import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import WriteTable from "../common/WriteTable";
const TableWrapper = styled.div`
  width: 40%;
  border-radius: 4px;
  background-color: white;
  padding: 2%;
  border: 1px solid ${palette.blue[0]};
  margin: 2rem auto;
`;

const Table = () => {
  return (
    <TableWrapper>
      <WriteTable />
    </TableWrapper>
  );
};

export default Table;
