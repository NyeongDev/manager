import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {__getPostList} from "../redux/modules/post";

import {PostCard} from "../components/index";
import {Button, ListView} from "../elements/index";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPostList());
  }, [dispatch]);

  const posts = useSelector((state) => state.post.posts);

  return (
    <>
      <ListView list={posts} onRender={(post) => <PostCard key={post.id} {...post} />} />

      <Button color={"primary"} size={"circle"} on_click={() => navigate("/write")}>
        +
      </Button>
    </>
  );
};

export default Main;
