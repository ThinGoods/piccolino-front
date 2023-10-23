import styled from "styled-components"
import { flex, font } from "../../utils/styles"
import { ITopContentProps } from "./header.types"
import { colors } from "../../utils/colors"
import { headerHeight, headerPercentWidth } from "../../utils/constants"

const IconBox = styled.div`
  margin-right: 24px;
`
const IconContainer = styled.img`
  width: 133px;
`
const Layout = styled.div <{ isFixed: boolean }>`
  ${props => (props.isFixed ? `
    position:fixed; 
    z-index: 20;
  `: '')};
  ${flex()};
  height: ${headerHeight}px;
  width: 100%;
  background-color: ${colors.light};
  box-shadow: 0px 10px 25px 0px ${colors.dark}20 ;
`
const Container = styled.div`
  ${flex()};
  height: 100%;
  width: ${headerPercentWidth}%;
`
const Content = styled.div`
  ${flex('column', 'center', 'space-around')};
  height: 100%;
  width: 100%;
`
const TopContent = styled.div<ITopContentProps>`
  ${flex('row', 'center', 'space-between')};
  margin-top: ${props => (props.withMarginTop ? 24 : 0)} px;
  width: 100%;
`
const Geolocation = styled.div`
  ${flex('row', 'center', 'flex-start')};
  width: 57%;
`
const Contacts = styled.div`
  ${flex('row', 'center', 'space-between')};
  width: 43%;
`
const Menu = styled.div``
const ContactIconsContainer = styled.div`
  ${flex('row', 'center', 'space-between')};
`
const SocialIcon = styled.img`
  padding: 5px;
`
const ContactPhone = styled.div`
  ${font('dark', 18, 600)};
`
const ContactEmail = styled.div`
  ${font('dark', 16, 500)};
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
  Contacts,
  Menu,
  ContactIconsContainer,
  SocialIcon,
  ContactPhone,
  ContactEmail,
  Divider,
  Layout: Layout,
}
