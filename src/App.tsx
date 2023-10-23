import { Header } from "./components/header/header";
import { Greeting_page } from "./components/greeting_page/greeting_page";
import { OurCoffee } from "./components/ourCoffee/ourCoffee";
import { S } from "./App.styles";
import { Spacer } from "./components/spacer/spacer";
import { PartnersCoffee } from "./components/partnersCoffee/partnersCoffee";
import { WhereToFindUs } from "./components/whereToFindUs/whereToFindUs";
import { AboutUs } from "./components/aboutUs/aboutUs";
import { InstagramPage } from "./components/instagramPage/instagramPage";
import { rootContainerId } from "./utils/constants";

function App() {
  return (
    <S.Container id={rootContainerId}>
      <Header showMenu={true} />
      <S.HeaderSpacing />
      <Greeting_page />
      <Spacer size={62}/>
      <OurCoffee />
      <Spacer size={150}/>
      <PartnersCoffee />
      <Spacer size={150}/>
      <WhereToFindUs />
      <AboutUs/>
      <Spacer size={150}/>
      <InstagramPage />
      <Spacer size={62}/>
      <Header showMenu={false} />
    </S.Container>
  );
}

export default App;
