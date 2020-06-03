import React from "react";
import Responsive from "../components/common/Responsive";
import HeaderContainer from "../containers/common/HeaderContainer";
import Subject from "../components/common/Subject";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";
import Table from "../components/write/Table";
const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <Subject subject={"웹 디자이너 스터디 그룹원 모집"} />
        <Table />
        <EditorContainer />
        <TagBoxContainer />
        <WriteActionButtonsContainer />
      </Responsive>
    </>
  );
};

export default WritePage;