import { CoffeeContent } from "../coffeeContent/coffeeContent"
import { CoffeeItem } from "../coffeeItem/coffeeItem"
import { S } from './partnersCoffee.styled'
import { Spacer } from "../spacer/spacer"
import { partnersCoffeeList } from "../../utils/data"
import { Button } from "../button/button"
import { partnersCoffee } from "../../utils/menu"

export const PartnersCoffee = () => {
  const handleShowMore = () => {
    console.log('tyt blyat bydyt pokazuvatsya nowui cofe');
  };

  return (
    <S.Content id={partnersCoffee.anchor}>
      <Spacer size={60} />
      <CoffeeContent 
        title="Кава від наших партнерів"
        description="100% арабіка класу Specialty"
      />
      
      <S.CoffeeItemContainer>
        {partnersCoffeeList.map((elem, index) => (
          <CoffeeItem key={index} coffeeItem={elem}/>
        ))}
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
