import {Link} from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to={"/"}>오늘의 책</Logo>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 30px;
  border-bottom: 1px solid #eee;
`;

const Logo = styled(Link)`
  font-size: 18px;
  font-weight: 700;
`;
