import React from "react";
import Topic from "../components/topic/Topic";
import HeaderContainer from "../containers/common/HeaderContainer";

const JobPage = () => {
  return (
    <>
      <HeaderContainer type="job" logoType="웹 개발자" />
      <Topic topic="Web Designer" />
      {/* <PostListContainer />
      <PaginationContainer /> */}
    </>
  );
};

export default JobPage;
