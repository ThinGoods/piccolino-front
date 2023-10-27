import { CoffeeContent } from "../coffeeContent/coffeeContent"
import { CoffeeItem } from "../coffeeItem/coffeeItem"
import { S } from './partnersCoffee.styled'
import { Spacer } from "../spacer/spacer"
import { partnersCoffeeList } from "../../utils/data"
import { Button } from "../button/button"

export const PartnersCoffee = () => {
  const handleShowMore = () => {
    console.log('tyt blyat bydyt pokazuvatsya nowui cofe');
  };

  return (
    <S.Content>

      <CoffeeContent 
        title="Кава від наших партнерів"
        description="На високих гривах гір кругом яру зеленіє старий ліс, як зелене море, вкрите хвилями."
      />
      
      <S.CoffeeItemContainer>
        {partnersCoffeeList.map((elem, index) => (
          <CoffeeItem key={index} coffeeItem={elem}/>
        ))};
      </S.CoffeeItemContainer>
      <Spacer size={68} />

      <Button 
        text="Завантажити більше"
        withTouchableArea={true}
        onClick={handleShowMore}
      />
      {/* <Button text="Завантажити більше" withTouchableArea/> --- TRUE also BE transmited */}
    </S.Content>
  )
}
