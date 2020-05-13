import React from "react";
import Header from "../components/common/Header";
import Topic from "../components/topic/Topic";

const JobPage = () => {
  return (
    <>
      <Header type="job" logoType="웹 개발자" />
      <Topic topic="웹 개발자" />
    </>
  );
};

export default JobPage;
