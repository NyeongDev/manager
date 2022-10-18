import {useDispatch} from "react-redux";
import {useState} from "react";

import {__delComment, __updateComment} from "../redux/modules/comment";

import {Layout, Input, Button, Text} from "../elements/index";
import {LAYOUT_THEMPLATE_CENTER} from "../elements/Layout";

const Comment = (props) => {
  const {id, comment} = props;

  const [edit, setEdit] = useState(false);
  const [editComment, setEditComment] = useState(comment);

  const dispatch = useDispatch();

  const commentDelete = () => {
    dispatch(__delComment(id));
  };

  const commentUpdate = (e) => {
    e.preventDefault();

    dispatch(__updateComment({...props, comment: editComment}));
    setEdit(false);
  };

  return (
    <Layout
      template={LAYOUT_THEMPLATE_CENTER}
      tag={edit ? "form" : "div"}
      on_submit={commentUpdate}
      style={{minHeight: "40px"}}>
      {edit ? (
        <Input required default_value={comment} on_change={(e) => setEditComment(e.target.value)} />
      ) : (
        <Text>{comment}</Text>
      )}

      <Layout>
        {edit ? (
          <Button type={"submit"} color={"primary"}>
            완료
          </Button>
        ) : (
          <Button type={"button"} color={"primary"} on_click={() => setEdit(true)}>
            수정
          </Button>
        )}
        <Button type={"button"} color={"secondary"} on_click={() => commentDelete()}>
          삭제
        </Button>
      </Layout>
    </Layout>
  );
};

export default Comment;
