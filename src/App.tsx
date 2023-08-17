import styled from "styled-components";
import { Header } from "./components/header/header";

function App() {
  const fakeDivStyles = {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: 'red',
  }

  return (
    <Container>
      <Header showMenu={true} />
      <div style={fakeDivStyles} />
      <Header showMenu={false} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 1080px;
`
export default App;
