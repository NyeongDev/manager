import {useDispatch} from "react-redux";

import {__delPost} from "../redux/modules/post";

import {Button, Layout, Text} from "../elements/index";
import {useNavigate} from "react-router-dom";

const PostCard = (props) => {
  const {id, writer, title, review} = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandler = () => {
    dispatch(__delPost(id));
  };

  return (
    <Layout
      tag={"li"}
      direction={"column"}
      on_click={() => navigate(`/detail/${id}`)}
      style={{border: "1px solid #999999", padding: "16px", borderRadius: "5px"}}>
      <Text color={"primary"} size={20} weight={700}>
        {title}
      </Text>

      <Text size={14} color={"gray"}>
        {writer}
      </Text>

      <Text ellipsis={"multiple"}>{review}</Text>

      <Button
        color={"secondary"}
        size={"fit"}
        on_click={(e) => {
          e.stopPropagation(); //정체는?

          deleteHandler(id);
        }}>
        삭제
      </Button>
    </Layout>
  );
};

export default PostCard;
