import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const getCommentListApi = async (post_id) => {
  const response = await axios.get(`${BASE_URL}/comments?postId=${post_id}`);

  return response.data;
};

export const addCommentApi = async (comment) => {
  await axios.post(`${BASE_URL}/comments`, comment);
};

export const delCommentApi = async (id) => {
  await axios.delete(`${BASE_URL}/comments/${id}`);
};

export const updateCommentApi = async (comment) => {
  await axios.put(`${BASE_URL}/comments/${comment.id}`, comment);
};
