import { ourCoffeeList } from "../../utils/data"
import { ourCofee } from "../../utils/menu"
import { CoffeeContent } from "../coffeeContent/coffeeContent"
import { CoffeeItem } from "../coffeeItem/coffeeItem"
import { S } from '../ourCoffee/ourCoffee.styled'
import { Spacer } from "../spacer/spacer"

export const OurCoffee = () => {
  return (
    <S.Content id={ourCofee.anchor}>
      <Spacer size={60}/>
      
      <CoffeeContent 
        title="Наша кава" 
        description="100% арабіка класу Specialty. Підвид арабіки: катура, катуай, пакас, бурбон."
      /> 
      {/* description="На високих гривах гір кругом яру зеленіє старий ліс, як зелене море, вкрите хвилями." */}
      <S.CoffeeItemContainer>
        {ourCoffeeList.map((elem) => (
          <CoffeeItem key={elem.id} coffeeItem={elem}/>
        ))}
      </S.CoffeeItemContainer>

    </S.Content>
  )
}
