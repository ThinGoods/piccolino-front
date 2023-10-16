import { Header } from "./components/header/header";
import { Greeting_page } from "./components/greeting_page/greeting_page";
import { OurCoffee } from "./components/ourCoffee/ourCoffee";
import { S } from "./App.styles";
import { Spacer } from "./components/spacer/spacer";
import { PartnersCoffee } from "./components/partnersCoffee/partnersCoffee";
import { WhereToFindUs } from "./components/whereToFindUs/whereToFindUs";

function App() {

  return (
    <S.Container>
      <Header showMenu={true} />
      <S.HeaderSpacing />
      <Greeting_page />
      <Spacer size={62}/>
      <OurCoffee />
      <Spacer size={150}/>
      <PartnersCoffee />
      <Spacer size={150}/>
      <WhereToFindUs />
      <Header showMenu={false} />
    </S.Container>
  );
}

export default App;
