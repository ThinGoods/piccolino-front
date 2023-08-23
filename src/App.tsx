import styled from "styled-components";
import { Header } from "./components/header/header";
import {colors} from "./utils/colors"
import { Greeting_page} from "./components/greeting_page/greeting_page"
import { S } from "./App.styles";

function App() {

  return (
    <S.Container>
      <Header showMenu={true} />
      <S.HeaderSpacing/>
      <Greeting_page />


      <Header showMenu={false} />
    </S.Container>
  );
}

export default App;
