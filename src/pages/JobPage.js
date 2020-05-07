import React from "react";
import Header from "../components/common/Header";
import Topic from "../components/topic/Topic";

const JobPage = () => {
  return (
    <>
      <Header type="job" logoType="지역/직업별" />
      <Topic topic="지역/직업별" />
    </>
  );
};

export default JobPage;
