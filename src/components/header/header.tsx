import mainLogo from '../../assets/imgs/mainLogo.png'
import telegramIcon from '../../assets/icons/telegramIcon.svg'
import viberIcon from '../../assets/icons/viberIcon.svg'
import whatsupIcon from '../../assets/icons/whatsappIcon.svg'
import burgerMenu from '../../assets/icons/burgerMenu.svg'
import { S } from "./header.styled"
import { IHeaderProps } from "./header.types"
import { Menu } from '../menu/menu'
import { AddresLine } from "../addresLine/addresLine"
import { addresses } from "../../utils/data"
import { useCurentScreenSize } from '../../hooks/useCurrentScreenSize/useCurentScreenSize'
import { goToAnchor } from '../../utils/navigations'
import { greetingPage } from '../../utils/menu'

export const Header = ({ isHeader, showBackdrop }: IHeaderProps) => {
  const isFooter = !isHeader;
  const screenSize = useCurentScreenSize();

  const renderGeolocation = () => {
    if (isFooter || !screenSize.isSizeM_2) {
      return (
        <S.Geolocation>
          <AddresLine addres={addresses.zsu.localStreet} />
          {!screenSize.isSizeL ? <S.Divider /> : null}
          <AddresLine addres={addresses.epicentr.localStreet} />
        </S.Geolocation>
      )
    } else {
      return null
      }
    }

  const openMobileMenu = () => {
    if (showBackdrop) {
      showBackdrop()
    };
  }
  const handleAnchorClick = () => goToAnchor(greetingPage);
  

  return (
    <S.Layout isFixed={isHeader} >
      <S.Container>
        <S.IconBox>
          <S.IconContainer isHeader={isHeader} src={mainLogo} onClick={handleAnchorClick}/>
        </S.IconBox>

        <S.Content>
          <S.TopContent withMarginTop={isHeader} >
          {renderGeolocation()}

            <S.Contacts isHeader={isHeader}>
              <S.PhoneGroup isHeader={isHeader}>
                <S.ContactIconsContainer isHeader={isHeader}>
                  <S.SocialIcon isHeader={isHeader} src={telegramIcon} />
                  <S.SocialIcon isHeader={isHeader} src={viberIcon} />
                  <S.SocialIcon isHeader={isHeader} src={whatsupIcon} />
                </S.ContactIconsContainer>

                <S.ContactPhone isHeader={isHeader}>+380 98 765 43 21</S.ContactPhone>
              </S.PhoneGroup>
              <S.ContactEmail isHeader={isHeader}>andriypoznansky@gmail.com</S.ContactEmail>
            </S.Contacts>

          </S.TopContent>
          {isHeader && screenSize.isSizeL ? <S.BurgerMenu src={burgerMenu} onClick={openMobileMenu}/> : null}
          {isHeader && !screenSize.isSizeL ? <Menu /> : null}
        </S.Content>
        {isFooter && screenSize.isSizeM_2 ? <S.IconBox>
          <S.IconContainer isHeader={isHeader} src={mainLogo} onClick={handleAnchorClick}/>
        </S.IconBox> : null}
      </S.Container>
    </S.Layout>
  )
} 
