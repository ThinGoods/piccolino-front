import styled from "styled-components";
import { Header } from "./components/header/header";
import { colors } from "./utils/colors"
import { Greeting_page } from "./components/greeting_page/greeting_page"
import { OurCoffee } from "./components/ourCoffee/ourCoffee"
import { S } from "./App.styles";
import { Spacer } from "./components/spacer/spacer";

function App() {

  return (
    <S.Container>
      <Header showMenu={true} />
      <S.HeaderSpacing />
      <Greeting_page />
      <Spacer size={62}/>
      <OurCoffee />
      <Spacer size={150}/>
      <Header showMenu={false} />
    </S.Container>
  );
}

export default App;
