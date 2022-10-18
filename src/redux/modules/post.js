import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPostListApi, addPostApi, getPostApi, delPostApi} from "../../model/postApi";

export const __getPostList = createAsyncThunk("getPostList", async (_, thunkAPI) => {
  const response = await getPostListApi();

  thunkAPI.dispatch(getPostList(response));
});

export const __getPost = createAsyncThunk("addPost", async (payload, thunkAPI) => {
  const response = await getPostApi(payload);

  thunkAPI.dispatch(getPost(response));
});

export const __addPost = createAsyncThunk("addPost", async (payload, thunkAPI) => {
  await addPostApi(payload);

  thunkAPI.dispatch(addPost(payload));
});

export const __delPost = createAsyncThunk("delPost", async (payload, thunkAPI) => {
  await delPostApi(payload);

  thunkAPI.dispatch(delPost(payload));
});

const initialState = {
  posts: [],
  post: {},
};

const post = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostList: (state, action) => {
      state.posts = action.payload;
    },

    getPost: (state, action) => {
      state.post = action.payload;
    },

    addPost: (state, action) => {
      const id = state.posts[state.posts.length - 1]?.id + 1 || 1;
      state.posts.push({id, ...action.payload});
    },
    delPost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    resetPost: (state) => {
      state.post = {};
    },
  },
});

export const {addPost, delPost, getPostList, getPost, resetPost} = post.actions;
export default post.reducer;
