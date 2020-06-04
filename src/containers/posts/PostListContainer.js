import React, { useEffect } from "react";
import qs from "qs";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../../components/posts/PostList";
import { listPosts } from "../../modules/posts";

const PostListContainer = ({ location }) => {
  console.log(location);
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading["posts/LIST_POSTS"],
      user: user.user,
    })
  );
  useEffect(() => {
    const { tag, username, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, location.search]);

  return (
    <>
      <PostList
        loading={loading}
        error={error}
        posts={posts}
        showWriteButton={user}
      />
    </>
  );
};

export default withRouter(PostListContainer);

//   showWriteButton props를 현재 로그인 중인 사용자의 정보를 지니고 있는 user 객체로 설정해 주었다,
//  user객체가 유효할때, 즉 사용자가 로그인 중일 때만 포스트를 작성하는 버튼이 나타난다.
