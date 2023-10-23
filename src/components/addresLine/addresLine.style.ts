import styled from "styled-components"
import {flex, font} from '../../utils/styles'

const GeolocationItem = styled.div`
  ${flex('row', 'center', 'space-between')};
`
const Icon = styled.img`
  margin-right: 19px;
`
const Addres = styled.div`
  ${font('dark', 14, 600)};
  text-wrap: nowrap;
`

export const S = {
  GeolocationItem,
  Icon,
  Addres,
}
