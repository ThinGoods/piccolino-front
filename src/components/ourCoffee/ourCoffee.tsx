import styled from "styled-components"
import { font } from "../../utils/styles"
import { CoffeeItem } from "../coffeeItem/coffeeItem"
import { S } from '../ourCoffee/ourCoffee.styled'
import { Spacer } from '../spacer/spacer'

export const OurCoffee = () => {
  return (
    <S.Content>
      <S.Title>Наша кава</S.Title>
      <Spacer size={30}/>
      <S.Description>На високих гривах гір кругом яру зеленіє старий ліс, як зелене море, вкрите хвилями.</S.Description>
      <Spacer size={40}/>
      <S.CoffeeItemContainer>
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
      </S.CoffeeItemContainer>

    </S.Content>
  )
}
