import Container from "@material-ui/core/Container";

import Landing from "./views/Landing";

import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Landing />
      </Container>
    </>
  );
};

export default App;
