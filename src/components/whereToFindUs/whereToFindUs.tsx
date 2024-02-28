import { S } from "./whereToFindUs.styled"
import busPhoto from "../../assets/imgs/busPhoto.png"
import { Spacer } from "../spacer/spacer"
import { AddresLine } from "../addresLine/addresLine"
import { Button } from "../button/button"
import { addresses } from "../../utils/data"
import { openNewTab } from "../../utils/navigations"
import { whereToFindUs } from "../../utils/menu"
import { useCurentScreenSize } from "../../hooks/useCurrentScreenSize/useCurentScreenSize"

export const WhereToFindUs = () => {

  const handleOpenLocationEpicentr = () => {
    openNewTab(addresses.epicentr.mapUrl);
  }
  const handleOpenLocationZSU = () => {
    openNewTab(addresses.zsu.mapUrl);
  }

  // const handleOpenLocation = (url: string) => () => {
  //   openNewTab(url);
  // }
  const screenSize = useCurentScreenSize();

  const epicAddress = 
    screenSize.isSizeM 
      ? addresses.epicentr_short.localStreet 
      : addresses.epicentr.localStreet;

  const zsuAddress =
    screenSize.isSizeM 
      ? addresses.zsu_short.localStreet 
      : addresses.zsu.localStreet;
  
  return (
    <S.Wrapper id={whereToFindUs.anchor}>
      <S.Container>
        <Spacer size={60} />
        <S.Title>Де нас знайти</S.Title>
        {/* <Spacer size={30} />
        <S.Description>На високих гривах гір кругом яру зеленіє старий ліс, як зелене море, вкрите хвилями.</S.Description> */}
        <Spacer size={47} />
        <S.Content>
          {screenSize.isSizeM_1 ? null : <S.BusPhoto src={busPhoto} />}
          <S.ContentBox>
            <S.TextLocation>
              {/* Якийсь текст типу в нас є дві точки бла бла бла одна біля озера друга біля епіка Під однією горою, коло зеленої левади, в глибокій западині стояла чимала хата Омелька Кайдаша. Хата потонула в старому садку. Старі черешні росли скрізь по дворі й кидали од себе густу тінь. Вся Кайдашева садиба ніби дихала холодком. */}
              Piccolinocoffeebus має 2 точки. Перша - це бусік, він знаходиться біля Епіцентру, з нього все починалось. Друга - балкончік, на вулиці ЗСУ 51в.
            </S.TextLocation>
            <Spacer size={30} />
            <S.LocationContainer>
              <S.AddressContainer>
                <AddresLine addres={ epicAddress } />
                <Spacer size={30} />
                <AddresLine addres={ zsuAddress } />
              </S.AddressContainer>
              <Spacer size={35} />

              <S.MapButtonContainer>
                <Button text="Показати на мапі" onClick={handleOpenLocationEpicentr} />
                <Spacer size={30} />
                {/* @ts-ignore */}
                <Button text="Показати на мапі" onClick={handleOpenLocationZSU} />

                {/* <Spacer size={30} />
                <Button text="Показати на мапі" onClick={handleOpenLocation(addresses.epicentr.mapUrl)} />
                <Spacer size={30} />
                <Button text="Показати на мапі" onClick={handleOpenLocation(addresses.zsu.mapUrl)} /> */}
              </S.MapButtonContainer>
            </S.LocationContainer>

          </S.ContentBox>
        </S.Content>
        <Spacer size={60} />
      </S.Container>
    </S.Wrapper>
  )
}
