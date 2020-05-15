import React from "react";
import styled from "styled-components";

const InformBlock = styled.div`
  padding: 1.125rem;
  border: 1px solid #000;
  margin: 1rem;
  p {
    font-size: 1.5rem;
  }
`;

const Information = () => {
  return (
    <InformBlock>
      <p>웹 디자이너 팀원 구해요</p>
    </InformBlock>
  );
};

export default Information;
