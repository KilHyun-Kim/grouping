import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";
import Tags from "../common/Tags";
import SubInfo from "../common/SubInfo";

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨위 포스트 padding top 제거 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.blue[0]};
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.white[0]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

// const SubInfo = styled.div`
//   /* margin-top : 1rem; */
//   color: ${palette.blue[0]};

//   /* span 사이에 가운뎃점 문자 */
//   span + span:before {
//     color: ${palette.blue[0]};
//     padding-left: 0.25rem;
//     padding-right: 0.25rem;
//     content: "\\B7";
//   }
// `;

// const Tags = styled.div`
//   margin-top: 0.5rem;
//   .tag {
//     display: inline-block;
//     color: ${palette.blue[0]};
//     text-decoration: none;
//     margin-right: 0.5rem;
//     &:hover {
//       color: ${palette.white[0]};
//     }
//   }
// `;

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return (
      console.log(error), (<PostListBlock>오류가 발생했습니다.</PostListBlock>)
    );
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && <Button to="/write">새 글 작성하기</Button>}
      </WritePostButtonWrapper>
      {/* 로딩중이 아니고, 포스트 배열이 존재할 때만 보여줌. */}
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
