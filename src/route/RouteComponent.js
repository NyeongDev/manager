import {Route, Routes} from "react-router-dom";
import PostDetail from "../pages/PostDetail";
import Main from "../pages/Main";
import PostWrite from "../pages/PostWrite";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:id" element={<PostDetail />} />
      <Route path="/write" element={<PostWrite />} />
    </Routes>
  );
};

export default RouteComponent;
