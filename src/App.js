import Menu from "./components/Menu";
import ContentList from "./pages/ContentList";
import Box from "./styles/Box";

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

const App = () => {
  return (
    <Box>
      <Menu menus={menus} />
      <ContentList />
    </Box>
  );
};

export default App;
