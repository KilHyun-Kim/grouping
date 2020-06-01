import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import palette from "../../lib/styles/palette";
import WriteTable from "./WriteTable";

const SubjectWrapper = styled(Responsive)`
  height: 4rem;
  margin-top: 4rem;
`;

const SubjectBlock = styled.div`
  font-size: 3rem;
  color: ${palette.gray[8]};
  text-align: center;
`;

const Subject = ({ subject }) => {
  return (
    <SubjectWrapper>
      <SubjectBlock>{subject}</SubjectBlock>
    </SubjectWrapper>
  );
};

export default Subject;
