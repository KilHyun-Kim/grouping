import client from "./client";
import qs from "qs";

export const writePost = ({ title, body, tags }) =>
  client.post("/api/posts", { title, body, tags });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringfy({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`);
};

/* listPost API를 호출할 때 파라미터로 값을 넣어 주면 /api/posts?usernmae=tester&page=2 와 같이 주소를 만들어서 호출한다. */
