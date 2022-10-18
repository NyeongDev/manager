import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {resetPost, __getPost} from "../redux/modules/post";
import {__getCommentList} from "../redux/modules/comment";

import {PrevButton, CommentForm, Comment} from "../components/index";
import {ListView, Text, Layout} from "../elements/index";

const PostDetail = () => {
  const dispatch = useDispatch();

  const {id} = useParams();

  const post = useSelector((state) => state.post.post);
  const comments = useSelector((state) => state.comment.comments);

  useEffect(() => {
    //처음들어가는순간에만 db에 접근해서 state를 갱신!!
    dispatch(__getPost(id)); //state의 post에 id가 일치하는 오브젝트가 들어있게 됨
    dispatch(__getCommentList(id));

    return () => {
      dispatch(resetPost()); //state의 post가 빈 오브젝트가 됨.
    }; //getpost를 사용할 때 매번 초기화를 시키는 건지?
  }, [dispatch, id]); //화면에 뿌려주기 전에 초기화 되는 것은 아닌지?

  if (!Object.keys(post).length > 0) {
    return null;
  }

  return (
    <>
      <PrevButton />
      <Layout direction={"column"} style={{marginTop: "40px"}}>
        <Text tag={"h2"} size={20} weight={700} color={"primary"}>
          {post.title}
        </Text>
        <Text size={14} color={"gray"}>
          {post.writer}
        </Text>
        <Text>{post.review}</Text>
      </Layout>
      <Layout direction={"column"} style={{marginTop: "40px"}}>
        <CommentForm />
        <ListView list={comments} onRender={(comment) => <Comment key={comment.id} {...comment} />} />
      </Layout>
    </>
  );
};

export default PostDetail;
