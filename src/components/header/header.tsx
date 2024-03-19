import mainLogo from '../../assets/imgs/mainLogo.png'
import telegramIcon from '../../assets/icons/telegramIcon.svg'
import viberIcon from '../../assets/icons/viberIcon.svg'
import whatsupIcon from '../../assets/icons/whatsappIcon.svg'
import burgerMenu from '../../assets/icons/burgerMenu.svg'
import { S } from "./header.styled"
import { IHeaderProps } from "./header.types"
import { Menu } from '../menu/menu'
import { AddresLine } from "../addresLine/addresLine"
import { addresses, piccolinoEmail, piccolinoPhone, piccolinoTelegramLink, piccolinoViberLink } from "../../utils/data"
import { useCurentScreenSize } from '../../hooks/useCurrentScreenSize/useCurentScreenSize'
import { goToAnchor, openNewTab } from '../../utils/navigations'
import { greetingPage } from '../../utils/menu'

const mailToVariable = "mailto:" + piccolinoEmail;
const phoneToVariable = "tel:" + piccolinoPhone;

export const Header = ({ isHeader, showBackdrop }: IHeaderProps) => {
  const isFooter = !isHeader;
  const screenSize = useCurentScreenSize();

  const renderGeolocation = () => {
    if (isFooter || !screenSize.isSizeM_2) {
      return (
        <S.Geolocation>
          <AddresLine location={addresses.zsu} />
          {!screenSize.isSizeL ? <S.Divider /> : null}
          <AddresLine location={addresses.epicentr} />
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
  const handleTelegramIconClick = () => openNewTab(piccolinoTelegramLink);
  const handleViberIconClick = () => openNewTab(piccolinoViberLink);
  const handleWhatsupIconClick = () => openNewTab(phoneToVariable);
  
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
                  <S.SocialIcon isHeader={isHeader} src={telegramIcon} onClick={handleTelegramIconClick}/>
                  <S.SocialIcon isHeader={isHeader} src={viberIcon} onClick={handleViberIconClick}/>
                  <S.SocialIcon isHeader={isHeader} src={whatsupIcon} onClick={handleWhatsupIconClick}/>
                </S.ContactIconsContainer>

                <S.ContactPhone isHeader={isHeader} href={phoneToVariable}>{piccolinoPhone}</S.ContactPhone>
              </S.PhoneGroup>
              <S.ContactEmail isHeader={isHeader} href={mailToVariable}>{piccolinoEmail}</S.ContactEmail>
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
