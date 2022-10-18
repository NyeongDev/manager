import styled from "styled-components";

const ListView = (props) => {
  const {list, onRender} = props;

  return <List>{list.map((item) => onRender(item))}</List>;
};

export default ListView;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
