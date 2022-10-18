import {useState} from "react";
import {useDispatch} from "react-redux";

import {__addComment} from "../redux/modules/comment";

import {Layout, Input, Button} from "../elements/index";

const CommentForm = () => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(__addComment(comment));
    setComment("");
  };

  return (
    <Layout tag={"form"} on_submit={onSubmitHandler}>
      <Input required value={comment} on_change={(e) => setComment(e.target.value)} />

      <Button color={"primary"} type={"submit"}>
        작성하기
      </Button>
    </Layout>
  );
};

export default CommentForm;
