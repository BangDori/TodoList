import styled from "styled-components";
import Menu from "./components/Menu";
import ContentList from "./pages/ContentList";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Register",
    link: "/register",
  },
  {
    id: 3,
    title: "Login",
    link: "/login",
  },
  {
    id: 4,
    title: "Todos",
    link: "/todos",
  },
];

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 90vh;
  margin: 0 auto;

  & ul,
  & li,
  & div,
  & a {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    color: black;
    font-size: 14px;
  }
`;

const App = () => {
  return (
    <Box>
      <Menu menus={menus} />
      <ContentList />
    </Box>
  );
};

export default App;
