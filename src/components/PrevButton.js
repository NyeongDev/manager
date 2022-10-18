import {Link} from "react-router-dom";
import styled from "styled-components";

const PrevButton = () => {
  return <Prev to={-1}> &lt; 뒤로가기</Prev>;
};

export default PrevButton;

const Prev = styled(Link)`
  color: #242424;
`;
