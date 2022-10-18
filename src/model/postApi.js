import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const getPostListApi = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);

  return response.data;
};

export const getPostApi = async (id) => {
  const response = await axios.get(`${BASE_URL}/posts?id=${id}`);
  // ?의 정체는?

  return response.data[0];
};

export const addPostApi = async (post) => {
  await axios.post(`${BASE_URL}/posts`, post);
};

export const delPostApi = async (id) => {
  await axios.delete(`${BASE_URL}/posts/${id}`);
};
