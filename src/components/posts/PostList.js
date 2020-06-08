import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Link } from "react-router-dom";

const PostListBlock = styled.div``;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemWrapper = styled.div`
  display: flex;
  text-align: center;
  padding: 3rem 3rem 3rem 0;
  margin: 1rem;
  border-bottom: 1px solid #efefef;
  box-shadow: rgb(204, 204, 204) 0px 10px 20px;
  display: flex;
  &:hover {
    /* transition 추가 */
  }
  p {
    font-size: 1.5rem;
  }
`;

const PostSortNum = styled.div`
  width: 10%;
`;

const PostItemBlock = styled.div`
  width: 30%;
  /* 맨 위 포스트는 padding-top 이 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostRegionBlock = styled.div`
  width: 30%;
`;
const PostCandidateBlock = styled.div`
  width: 30%;
  text-align: right;
  font-size: 1.5rem;
  padding: 0.7rem 0;
  color: #fff;
  border-radius: 5px;
  background-color: ${palette.trafficLight[0]};
  span {
  }
`;

const Postitem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;

  return (
    <PostItemWrapper>
      <PostSortNum>글번호</PostSortNum>
      <PostItemBlock>
        <h2>
          <Link to={`/@${user.username}/${_id}`}>{title}</Link>
        </h2>
        <Tags tags={tags} />
        {/* <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      /> */}
        {/* <p>{body}</p> */}
      </PostItemBlock>
      <PostRegionBlock>
        <p>지역입니다</p>
      </PostRegionBlock>
      <PostCandidateBlock>
        <p>참가자 입니다</p>
      </PostCandidateBlock>
    </PostItemWrapper>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  // 에러 발생시
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {/* 로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌 */}
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <Postitem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
