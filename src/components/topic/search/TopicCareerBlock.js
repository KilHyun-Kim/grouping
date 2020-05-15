import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";

const CareerBlock = styled.div`
  border-left: 1px solid ${palette.blue[0]};
`;

const TopicCareerBlock = () => {
  return (
    <CareerBlock>
      <p>안녕하세여</p>
    </CareerBlock>
  );
};

export default TopicCareerBlock;
