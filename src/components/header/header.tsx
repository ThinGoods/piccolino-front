import { S } from "./header.styled"
import { IHeaderProps } from "./header.types"
import mainLogo from '../../assets/imgs/mainLogo.png'
import telegramIcon from '../../assets/icons/telegramIcon.svg'
import viberIcon from '../../assets/icons/viberIcon.svg'
import whatsupIcon from '../../assets/icons/whatsappIcon.svg'
import { Menu } from '../menu/menu'
import { AddresLine } from "../addresLine/addresLine"
import { addresses } from "../../utils/data"

export const Header = (props: IHeaderProps) => {
  return (
    <S.Layout isFixed={props.showMenu} >
      <S.Container>
        <S.IconBox>
          <S.IconContainer src={mainLogo} />
        </S.IconBox>

        <S.Content>
          <S.TopContent withMarginTop={props.showMenu} >
            <S.Geolocation>
              <AddresLine addres={addresses.zsu.localStreet} />
              <S.Divider />

              <AddresLine addres={addresses.epicentr.localStreet} />
            </S.Geolocation>

            <S.Contacts>
              <S.ContactIconsContainer>
                <S.SocialIcon src={telegramIcon} />
                <S.SocialIcon src={viberIcon} />
                <S.SocialIcon src={whatsupIcon} />
              </S.ContactIconsContainer>
              <S.ContactPhone>098 765 43 21</S.ContactPhone>
              <S.ContactEmail>andriypoznansky@gmail.com</S.ContactEmail>
            </S.Contacts>
          </S.TopContent>
          {props.showMenu ? <Menu /> : null}


        </S.Content>
      </S.Container>
    </S.Layout>
  )
} 