import styled from "styled-components"
import { flex, font } from "../../utils/styles"
import { IStyledIsHeaderProps, ITopContentProps } from "./header.types"
import { colors } from "../../utils/colors"
import { contentWidthSizing, headerHeightSizing, headerHeightTemplates } from "../../utils/constants"
import { query } from "../../utils/mediaQueries"

const IconBox = styled.div`
  margin-right: 24px;

  @media ${query.XL} {
    margin-right: 20px;
  }
  @media ${query.L_3} {
    margin-right: 10px;
  }
  @media ${query.L} {
    margin-right: 100px;
  }
  @media ${query.XM_1} {
    margin-right: 30px;
  }
  @media ${query.XM} {
    margin-right: 15px;
  }
  @media ${query.M_1} {
    margin-right: 10px;
  }
`
const IconContainer = styled.img<IStyledIsHeaderProps>`
  width: 133px;
  @media ${query.XL} {
    width: 110px;
  }
  @media ${query.L} {
    width: 80px;
  }
  @media ${query.M_1} {
    width: 60px;
  }
  @media ${query.M_2} {
    width: 90px;
  }
  @media ${query.M} {
    width: 70px;
  }
  @media ${query.XS} {
    ${prop => (!prop.isHeader ? `
    width: 55px;
    ` : '')}
  }
`
const Layout = styled.div <{ isFixed: boolean }>`
  ${props => (props.isFixed ? `
    position:fixed; 
    z-index: 20;
  `: '')};
  ${flex()};
  width: 100%;
  background-color: ${colors.light};
  box-shadow: 0px 10px 25px 0px ${colors.dark}20;
  ${headerHeightSizing};
`
const Container = styled.div`
  ${flex()};
  height: 100%;
  ${contentWidthSizing};
`
const Content = styled.div`
  ${flex('column', 'center', 'space-around')};
  width: 100%;
  @media ${query.L} {
    ${flex('row', 'center', 'space-between')}
  }
`
const TopContent = styled.div<ITopContentProps> `
  ${flex('row', 'center', 'space-between')};
  margin-top: ${props => (props.withMarginTop ? 24 : 0)}px;
  width: 100%;
// 2 interfaces
  @media ${query.L} {
    margin-top: 0px;
  }
  @media ${query.M_2} {
    ${flex('column', 'center', 'space-between')};
  }
`
const Geolocation = styled.div`
  ${flex('row', 'center', 'flex-start')};
  width: 57%;

  @media ${query.XL_1} {
    width: 53%;
  }
  @media ${query.XL} {
    width: 52%;
  }
  @media ${query.L} {
    ${flex('column', 'flex-start', 'space-around')};
    height: ${headerHeightTemplates.extraSmall}px;
    width: 40%;
  }
  @media ${query.XM} {
    ${flex('column', 'flex-start', 'space-evenly')};
    width: 49%;
  }
  @media ${query.M_2} {
    ${flex('column', 'center', 'center')};
    width: 100%;
    height: 50px;
  }
`
const Contacts = styled.div<IStyledIsHeaderProps>`
  ${flex('row', 'center', 'space-between')};
  width: 43%;

  @media ${query.XL_1} {
    width: 47%;
  }
  @media ${query.L_2} {
    width: 45%;
  }
  @media ${query.L} {
    ${flex('column', 'flex-start', 'space-around')};
    height: ${headerHeightTemplates.extraSmall}px;
  }
  @media ${query.XM} {
    ${flex('column', 'flex-start', 'space-evenly')};
    width: 51%;
  }
  @media ${query.M_1} {
    width: 50%;
  }
  ${props => (props.isHeader ? `
    @media ${query.M_2} {
      ${flex('column', 'center', 'center')};
      width: 100%;
    }
    `: `
    @media ${query.M_2} {
      ${flex('column', 'center', 'space-evenly')};
      height: 100%;
      width: 100%;
    }
    `
  )}
`
const Menu = styled.div``

const ContactIconsContainer = styled.div<IStyledIsHeaderProps>`
  ${flex('row', 'center', 'flex-start')};
  /* width: 40%; */
  @media ${query.XM} {
    margin-right: 3px;
  }
  ${prop => (!prop.isHeader ? `
    @media ${query.M_2} {
      width: auto;
    }
  ` : '')}
  
`
const SocialIcon = styled.img<IStyledIsHeaderProps>`
  padding: 5px;

  @media ${query.XL} {
    width: 20px;
    padding: 3px;
  }
  @media ${query.L_2} {
    width: 18px;
    padding: 2px;
  }
  @media ${query.L_3} {
    width: 16px;
  }
  @media ${query.L} {
    width: 24px;
  }
  @media ${query.XM} {
    width: 19px;
    padding: 1px;
  }
  @media ${query.M_2} {
    ${props => (props.isHeader ? `
      width: 24px;
      padding: 2px;
    ` : `
    width: 24px;
    padding: 3px;
    `)}
  }
  @media ${query.M} {
    ${props => (!props.isHeader ? `
      width: 19px;
      padding: 2px;
    ` : '')}
  }
`

const ContactPhone = styled.div<IStyledIsHeaderProps>`
  ${font('dark', 17, 600)};
  
  @media ${query.XL_2} {
    font-size: 16px;
  }
  @media ${query.XL_2} {
    font-size: 14px;
  }

  @media ${query.L_2} {
    font-size: 13px;
  }

  @media ${query.L_3} {
    font-size: 12px;
  }
  @media ${query.L} {
    font-size: 17px;
  }
  @media ${query.XM} {
    font-size: 15px;
  }
  @media ${query.M_2} {
    ${props => (props.isHeader ? `
        padding-top: 10px;
        padding-bottom: 10px;
      ` : `
      font-size: 13px;
      ` )}
  }
  @media ${query.M} {
    ${props => (!props.isHeader ? `
        font-size: 11px;
      ` : '')}
  }
`

const ContactEmail = styled.div<IStyledIsHeaderProps>`
  ${font('dark', 16, 500)};
  
  @media ${query.L_2} {
    font-size: 14px;
  }
  @media ${query.L_3} {
    font-size: 10px;
  }
  @media ${query.L} {
    font-size: 16px;
  }
  @media ${query.XM} {
    font-size: 14px;
  }
  @media ${query.M} {
    ${props => (!props.isHeader ? `
        font-size: 12px;
      ` : '')}
  }
  @media ${query.XS} {
    ${props => (props.isHeader ? `
        font-size: 11px;
      ` : '')}
  }
`
const Divider = styled.div`
  width: 40px;
`
const DevelopedBy = styled.div``
const PhoneGroup = styled.div<IStyledIsHeaderProps>`
  ${flex('row', 'center', 'space-between')}
  width: 50%;
  @media ${query.XL} {
    width: 45%;
  }
  @media ${query.L} {
    ${flex('row', 'center', 'flex-start')}
    width: 100%;
  }
  ${props => (props.isHeader ? `
    @media ${query.M_2} {
      ${flex('column', 'center', 'center')}
    }` : `
      @media ${query.M_2} {
        ${flex('row', 'center', 'center')}
      }
    `
  )}
`
const BurgerMenu = styled.img`
  width: 40px;
  @media ${query.M_1} {
    width: 30px;
  }
`

export const S = {
  Container,
  IconBox,
  IconContainer,
  Content,
  TopContent,
  Geolocation,
  Contacts,
  Menu,
  ContactIconsContainer,
  SocialIcon,
  ContactPhone,
  ContactEmail,
  Divider,
  Layout: Layout,
  DevelopedBy,
  PhoneGroup,
  BurgerMenu,
}
