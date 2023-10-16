import { ourCoffeeList } from "../../utils/data"
import { CoffeeContent } from "../coffeeContent/coffeeContent"
import { CoffeeItem } from "../coffeeItem/coffeeItem"
import { S } from '../ourCoffee/ourCoffee.styled'

export const OurCoffee = () => {
  return (
    <S.Content>

      <CoffeeContent 
        title="Наша кава" 
        description="На високих гривах гір кругом яру зеленіє старий ліс, як зелене море, вкрите хвилями."
      />

      <S.CoffeeItemContainer>
        {ourCoffeeList.map((elem) => (
          <CoffeeItem key={elem.id} coffeeItem={elem}/>
        ))}
      </S.CoffeeItemContainer>

    </S.Content>
  )
}
