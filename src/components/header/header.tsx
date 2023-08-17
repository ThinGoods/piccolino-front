import { S } from "./header.styled"
import { IHeaderProps } from "./header.types"
import mainLogo from '../../assets/imgs/mainLogo.png'
import iconLogo from '../../assets/icons/gps.svg'
import telegramIcon from '../../assets/icons/telegramIcon.svg'
import viberIcon from '../../assets/icons/viberIcon.svg'
import whatsupIcon from '../../assets/icons/whatsappIcon.svg'
import { Menu } from '../menu/menu'

export const Header = (props: IHeaderProps) => {
  return (
    <S.Layout isFixed={props.showMenu} >
      <S.Container>
        <S.IconBox>
          <S.IconContainer src={mainLogo} />
        </S.IconBox>

        <S.Content>
          <S.TopContent withMarginTop={props.showMenu}>
            <S.Geolocation>
              <S.GeolocationItem>
                <S.Icon src={iconLogo} />
                <S.Addres> вул. Збройних Сил України 51В </S.Addres>
              </S.GeolocationItem>
              <S.Divider />

              <S.GeolocationItem>
                <S.Icon src={iconLogo} />
                <S.Addres> вул. Героїв Крут 1/3 (Епіцентр) </S.Addres>
              </S.GeolocationItem>
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