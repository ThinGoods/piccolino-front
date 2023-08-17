import styled from "styled-components"
import { flex, font } from "../../utils/styles"
import { ITopContentProps } from "./header.types"
import { colors } from "../../utils/colors"

const IconBox = styled.div`
  margin-right: 24px;
`
const IconContainer = styled.img`
  width: 133px;
`

const Layout = styled.div <{ isFixed: boolean }>`
height: 160px;
width: 100%;
background-color: ${colors.light};
${props => (props.isFixed ? `
  position:fixed; 
  z-index: 20;
`: '')};

box-shadow: 0px 10px 25px 0px ${colors.dark}20 ;
${flex()}
`

const Container = styled.div`
  height: 100%;
  width: 75%;
  ${flex()}
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  ${flex('column', 'center', 'space-around')}
`

const TopContent = styled.div<ITopContentProps>`
  width: 100%;
  margin-top: ${props => (props.withMarginTop ? 24 : 0)} px;
  ${flex('row', 'center', 'space-between')}

`

const Geolocation = styled.div`
width: 57%;
  ${flex('row', 'center', 'flex-start')}
  
`

const GeolocationItem = styled.div`
  ${flex('row', 'center', 'space-between')}
`

const Icon = styled.img`
  margin-right: 19px;
`

const Addres = styled.div`
  ${font('dark', 14, 600)}
`
const Contacts = styled.div`
  width: 43%;
  ${flex('row', 'center', 'space-between')}
  
`
const Menu = styled.div``
const ContactIconsContainer = styled.div`
  ${flex('row', 'center', 'space-between')}
`
const SocialIcon = styled.img`
  padding: 5px;
`
const ContactPhone = styled.div`
  ${font('dark', 18, 600)}
`
const ContactEmail = styled.div`
  ${font('dark', 16, 500)}
`
const Divider = styled.div`
  width: 40px;
`

export const S = {
  Container,
  IconBox,
  IconContainer,
  Content,
  TopContent,
  Geolocation,
  GeolocationItem,
  Icon,
  Addres,
  Contacts,
  Menu,
  ContactIconsContainer,
  SocialIcon,
  ContactPhone,
  ContactEmail,
  Divider,
  Layout: Layout,
}
