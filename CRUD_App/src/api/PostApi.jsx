import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
// /posts
export const PostApiData = () => {
  const postData = API.get("/posts");
  return postData;
};

// eslint-disable-next-line react-refresh/only-export-components
export const deletePost = (id) => {
  return API.delete(`/posts/${id}`);
};
