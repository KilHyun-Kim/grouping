import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
  border: 1px solid ${palette.blue[0]};
  border-radius: 4px;
  padding: 5%;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.blue[0]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

// const SubInfo = styled.div`
//   margin-top: 1rem;
//   color: ${palette.gray[6]};

//   /* span 사이에 가운뎃점 문자 보여 주기 */
//   span + span:before {
//     color: ${palette.gray[5]};
//     padding-left: 0.25rem;
//     padding-right: 0.25rem;
//     content: "\\B7"; /* 가운뎃점 문자*/
//   }
// `;

// const Tags = styled.div`
//   margin-top: 0.5rem;
//   .tag {
//     display: inline-block;
//     color: ${palette.cyan[7]};
//     text-decoration: none;
//     margin-right: 0.5rem;
//     &:hover {
//       color: ${palette.cyan[6]};
//     }
//   }
// `;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;
const PostViewer = ({ post, error, loading }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트 입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생 !</PostViewerBlock>;
  }

  // 로딩 중이거나 아직 포스트 데이터가 없을때
  if (loading || !post) {
    return null;
  }
  const { title, body, user, publishedDate, tags } = post;
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.name}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags} />
      </PostHead>
      <PostContent
        //   JSX에서 HTML을 바로 렌더링 해버리면 태그가 적용되지않고 일반 텍스트 형태로 나타남
        // HTML 을 적용하고 싶다면 dangerouslySetInnerHTML 라는 props를 설정해줘야한다.
        dangerouslySetInnerHTML={{ __html: body }}
      ></PostContent>
    </PostViewerBlock>
  );
};

export default PostViewer;
