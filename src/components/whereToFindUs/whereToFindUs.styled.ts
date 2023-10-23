import styled from "styled-components"
import { colors } from "../../utils/colors"
import { flex, font } from "../../utils/styles"
import { headerPercentWidth } from "../../utils/constants"


const Wrapper = styled.div`
  background-color: ${colors.light};
  ${flex('row', 'flex-start', 'center')};
  width: 100%;
`
const Container = styled.div`
  ${flex('column', 'center', 'center')};
  width: ${headerPercentWidth}%;
  background-color: ${colors.light};
`
const Title = styled.div`
  ${font(colors.dark, 40, 600)};
`
const Description = styled.div`
  ${font(colors.dark, 16, 400)};
`
const Content = styled.div`
  ${flex('row', 'center', 'space-between')};
`
const BusPhoto = styled.img`
  width: 45%;
`
const ContentBox = styled.div`
  margin-left: 22px;
`
const TextLocation = styled.div`
  ${font(colors.dark, 14, 400)};
  line-height: 30px;
`
const MapLocation = styled.div`
`
const MapIcon = styled.img`
`
const MapButton = styled.div`
  ${font(colors.darkOrage, 16, 500)};
  cursor: pointer;
`
const LocationContainer = styled.div `
  ${flex('row', 'center', 'flex-start')};
  
`
const AddressContainer = styled.div`
  ${flex('column', 'flex-start', 'flex-start')};
  /* padding: 10px; */
`
const MapButtonContainer = styled.div`
  ${flex('column', 'flex-start', 'flex-start')};
  line-height: 24px;
  padding-left: 50px;
  width: 100%;
  /* background-color: red; */
`
export const S = {
  Wrapper,
  Container,
  Title,
  Description,
  Content,
  BusPhoto,
  ContentBox,
  TextLocation,
  MapLocation,
  LocationContainer,
  AddressContainer,
  MapIcon,
  MapButton,
  MapButtonContainer
}
