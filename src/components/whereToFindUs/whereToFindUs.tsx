import { S } from "./whereToFindUs.styled"
import busPhoto from "../../assets/imgs/busPhoto.png"
import { Spacer } from "../spacer/spacer"
import { AddresLine } from "../addresLine/addresLine"
import { Button } from "../button/button"

export const WhereToFindUs = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Spacer size={74}/>
        <S.Title>Де нас знайти</S.Title>
        <Spacer size={30} />
        <S.Description>На високих гривах гір кругом яру зеленіє старий ліс, як зелене море, вкрите хвилями.</S.Description>
        <Spacer size={47} />
        <S.Content>
          <S.BusPhoto src={busPhoto}/>
          <S.ContentBox>
            <S.TextLocation>
              Якийсь текст типу в нас є дві точки бла бла бла одна біля озера друга біля епіка Під однією горою, коло зеленої левади, в глибокій западині стояла чимала хата Омелька Кайдаша. Хата потонула в старому садку. Старі черешні росли скрізь по дворі й кидали од себе густу тінь. Вся Кайдашева садиба ніби дихала холодком.
            </S.TextLocation>
            <Spacer size={30} />
            <S.LocationContainer>
              <S.AddressContainer>
                <AddresLine addres="вул. Збройних Сил України 51В"/>
                <Spacer size={30} />
                <AddresLine addres="вул. Героїв Крут 1/3 (Епіцентр)"/>
              </S.AddressContainer>
              <Spacer size={35} />

              <S.MapButtonContainer>
                <Button text="Показати на мапі"/>
                <Spacer size={30} />
                <Button text="Показати на мапі"/>
              </S.MapButtonContainer>
            </S.LocationContainer>
            
          </S.ContentBox>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}