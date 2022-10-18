import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {__addPost} from "../redux/modules/post";

import {Layout, Input, TextArea, Button} from "../elements/index";
import {PrevButton} from "../components/index";

const PostWrite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const init = {
    writer: "",
    title: "",
    review: "",
  };

  const [post, setPost] = useState(init);

  const onSubmutHandler = (e) => {
    e.preventDefault();

    dispatch(__addPost(post));

    alert("게시물 작성 완료");
    navigate("/");
  };

  const onChangeHandler = (e) => {
    const {name, value} = e.target;

    setPost({...post, [name]: value});
  };

  return (
    <Layout tag={"form"} gap={30} direction={"column"} on_submit={onSubmutHandler}>
      <PrevButton />

      <Input
        name="title"
        title="제목"
        desc="제목을 입력해주세용"
        place_holder="제목"
        value={post.title}
        required
        on_change={onChangeHandler}
      />

      <Input
        name="writer"
        title="작성자"
        desc="작성자를 입력해주세용"
        place_holder="작성자"
        value={post.writer}
        required
        on_change={onChangeHandler}
      />

      <TextArea
        name="review"
        title="감상평"
        desc="감상평을 길게 입력해주세용"
        place_holder="감상평"
        value={post.review}
        rows={10}
        required
        on_change={onChangeHandler}
      />
      <Button
        disabled={Object.values(post).findIndex((value) => value === "") !== -1}
        size={"fill"}
        color={"primary"}
        type={"submit"}>
        작성하기
      </Button>
    </Layout>
  );
};

export default PostWrite;
