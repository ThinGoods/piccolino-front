import { S } from "./coffeeItem.styled"
import gonduras250 from '../../assets/imgs/gonduras250.png'
import uahsign from '../../assets/imgs/uahsign.png'
import { Spacer } from "../spacer/spacer"


export const CoffeeItem = () => {
  return (
    <S.Content>
      <S.Image src={gonduras250}/>

      <Spacer size={16}/>

      <S.Description>
        <S.Country>Гондурас</S.Country>
        <Spacer size={10}/>
        <S.Region>Копан</S.Region>
        <Spacer size={10}/>
        <S.Descriptors>шоколад, горіх, лимон</S.Descriptors>
      </S.Description>

      <Spacer size={16}/>

      <S.Parameters>
        <S.Record>
          <S.Lable>Тип</S.Lable>
          <S.Value>мелена</S.Value>
        </S.Record>

        <Spacer size={8}/>

        <S.Record>
          <S.Lable>Спосіб обробки</S.Lable>
          <S.Value>мита</S.Value>
        </S.Record>

        <Spacer size={8}/>

        <S.Record>
          <S.Lable>Обсмаження</S.Lable>
          <S.Value>еспресо</S.Value>
        </S.Record>

        <Spacer size={8}/>

        <S.Record>
          <S.Lable>Оцінка SCA</S.Lable>
          <S.Value>83</S.Value>
        </S.Record>
      </S.Parameters>

      <Spacer size={16}/>

      <S.BottomBox>
        <S.WeightAndPriceBox>
          <S.Price>250</S.Price>
          <S.UahIcon src={uahsign}/>
          <S.Weight>250 г</S.Weight>
        </S.WeightAndPriceBox>

        <S.OrderBox>Замовити</S.OrderBox>
      </S.BottomBox>
      <Spacer size={24}/>

    </S.Content>
  )
}
