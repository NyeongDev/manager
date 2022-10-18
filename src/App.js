import styled from "styled-components";
import "./App.css";
import RouteComponent from "./route/RouteComponent";
import Header from "./section/Header";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Contents>
        <RouteComponent />
      </Contents>
    </>
  );
}

export default App;

const Contents = styled.div`
  max-width: 1000px;
  min-width: 1000px;
  min-height: calc(100vh - 50px);
  margin: 0 auto;
  padding: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  box-sizing: border-box;
`;
