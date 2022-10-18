import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getCommentListApi, addCommentApi, delCommentApi, updateCommentApi} from "../../model/commentApi";

export const __getCommentList = createAsyncThunk("getCommentList", async (payload, thunkAPI) => {
  const response = await getCommentListApi(payload);

  thunkAPI.dispatch(getCommentList(response));
});

export const __addComment = createAsyncThunk("addComment", async (payload, thunkAPI) => {
  const postId = thunkAPI.getState().post.post.id;
  const comment = {comment: payload, postId};
  await addCommentApi(comment);

  thunkAPI.dispatch(addComment(comment));
});

export const __delComment = createAsyncThunk("delComment", async (payload, thunkAPI) => {
  await delCommentApi(payload);

  thunkAPI.dispatch(delComment(payload));
});

export const __updateComment = createAsyncThunk("updateComment", async (payload, thunkAPI) => {
  await updateCommentApi(payload);

  thunkAPI.dispatch(updateComment(payload));
});

const initialState = {
  comments: [],
};

const comment = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getCommentList: (state, action) => {
      state.comments = action.payload;
    },
    addComment: (state, action) => {
      const id = state.comments[state.comments.length - 1]?.id + 1 || 1;

      state.comments.push({id, ...action.payload});
    },
    delComment: (state, action) => {
      state.comments = state.comments.filter((comment) => comment.id !== action.payload);
    },
    updateComment: (state, action) => {
      state.comments = state.comments.map((comment) => (comment.id === action.payload.id ? action.payload : comment));
    },
  },
});

export const {addPost, addComment, delComment, updateComment, getCommentList} = comment.actions;
export default comment.reducer;
