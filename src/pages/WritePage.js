import React from "react";
import Responsive from "../components/common/Responsive";
import HeaderContainer from "../containers/common/HeaderContainer";
import Subject from "../components/common/Subject";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";
import Table from "../components/write/Table";
import { Helmet } from "react-helmet-async";
const WritePage = () => {
  return (
    <>
      <Helmet>
        <title>GroupingPong - 글쓰기</title>
      </Helmet>
      <HeaderContainer />
      <Responsive>
        <Subject subject={"웹 디자이너 그룹원 모집"} />
        <Table />
        <EditorContainer />
        <TagBoxContainer />
        <WriteActionButtonsContainer />
      </Responsive>
    </>
  );
};

export default WritePage;
