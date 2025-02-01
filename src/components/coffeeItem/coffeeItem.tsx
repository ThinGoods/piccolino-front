import { S } from "./coffeeItem.styled"
import uahsign from '../../assets/icons/uahsign.svg'
import { Spacer } from "../spacer/spacer"
import { ICoffeeItemProps } from "./coffeeItem.types"
import { capitalize } from "../../utils/string"

export const CoffeeItem = (props: ICoffeeItemProps) => {
  const { coffeeItem } = props;
  let toUpperCaseFirstLetter = coffeeItem.descriptors.map(elem => capitalize(elem));
  const descriptorsString = toUpperCaseFirstLetter.join(", ");

  return (
    <S.Wraper>
      <S.Content>
        <S.Image src={coffeeItem.img} />

        <Spacer size={16} />

        <S.Description>
          <S.Country>{coffeeItem.country}</S.Country>
          <Spacer size={10} />
          <S.Region>{coffeeItem.region}</S.Region>
          <Spacer size={10} />
          <S.Descriptors>{descriptorsString}</S.Descriptors>
        </S.Description>

        <Spacer size={16} />

        <S.Parameters>
          <S.Record>
            <S.Lable>Тип</S.Lable>
            <S.Value>{coffeeItem.type}</S.Value>
          </S.Record>

          <Spacer size={8} />

          <S.Record>
            <S.Lable>Спосіб обробки</S.Lable>
            <S.Value>{coffeeItem.processing}</S.Value>
          </S.Record>

          <Spacer size={8} />

          <S.Record>
            <S.Lable>Обсмаження</S.Lable>
            <S.Value>{coffeeItem.roasting}</S.Value>
          </S.Record>

          <Spacer size={8} />

          <S.Record>
            <S.Lable>Оцінка SCA</S.Lable>
            <S.Value>{coffeeItem.score}</S.Value>
          </S.Record>
        </S.Parameters>

        <Spacer size={16} />

        <S.BottomBox>
          <S.WeightAndPriceBox>
            <S.Price>{coffeeItem.price}</S.Price>
            <S.UahIcon src={uahsign} />
            <S.Weight>{coffeeItem.weight} г</S.Weight>
          </S.WeightAndPriceBox>

          <S.OrderBox>Замовити</S.OrderBox>
        </S.BottomBox>
        <Spacer size={24} />

      </S.Content>
      <Spacer size={20} />
    </S.Wraper>
  )
}
