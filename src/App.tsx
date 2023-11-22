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
import { Vacancies } from "./components/vacancies/vacancies";
import { GoogleReviews } from "./components/googleReviews/googleReviews";
import { DevelopedBy } from "./components/developedBy/developedBy";

function App() {
  return (
    <S.Container id={rootContainerId}>
      <Header isHeader={true} />
      <S.HeaderSpacing />
      {/* <Greeting_page />
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
      <Vacancies />
      <Spacer size={54}/>
      <GoogleReviews /> */}
      <Spacer size={59}/>
      <Header isHeader={false} />
      <DevelopedBy />
    </S.Container>
  );
}

export default App;
