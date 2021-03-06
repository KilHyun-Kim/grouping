import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const WriteActionButtonBlock = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  margin: 2rem auto 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

/* TagBox에서 사용하는 버튼과 일치하는 높이로 설정한 후 서로 간의 여백 지정 */

const StyledButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
  return (
    <WriteActionButtonBlock>
      <StyledButton fullWidth onClick={onPublish}>
        포스트 {isEdit ? "수정" : "등록"}
      </StyledButton>
      <StyledButton fullWidth onClick={onCancel}>
        취소
      </StyledButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButtons;
