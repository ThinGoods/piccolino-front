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
import { useState } from "react";
import { Backdrop } from "./components/backdrop/backdrop";
import { useCurrentSpacerSize } from "./hooks/useCurrentScreenSize/useCurrentSpacerSize";
import { Usertest } from "./components/usertest/usertest";

function App() {
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const showBackdrop = () => {
    setIsBackdropVisible(true);
  }
  const hideBackdrop = () => {
    setIsBackdropVisible(false);
  }

  const spacer = useCurrentSpacerSize();
  return (
    <S.Container id={rootContainerId}>

      <Backdrop visible={isBackdropVisible} hideBackdrop={hideBackdrop}/>
      <Header isHeader={true} showBackdrop={showBackdrop}/>
      <S.HeaderSpacing />
      <Greeting_page />
      <OurCoffee />
      <Spacer size={spacer}/>
      <PartnersCoffee />
      <Spacer size={spacer*2}/>
      <WhereToFindUs />
      <Spacer size={spacer}/> 
      <AboutUs/>
      <Spacer size={spacer}/> 
      <InstagramPage />
      <Spacer size={spacer}/>
      <Vacancies />
      <Spacer size={spacer}/>
      <GoogleReviews />
      <Spacer size={spacer}/>
      <Header isHeader={false} />
      <DevelopedBy />
      <Usertest />
    </S.Container>
  );
}

export default App;
