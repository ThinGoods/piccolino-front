import styled from "styled-components"
import { query } from "../../utils/mediaQueries"
import { flex, font } from '../../utils/styles'
import { IStyledIsHeaderProps } from "../header/header.types"

const GeolocationItem = styled.div`
  ${flex('row', 'center', 'space-between')};
`
const Icon = styled.img`
  margin-right: 19px;

  @media ${query.XL_2} {
    margin-right: 16px;
  }
  @media ${query.XL} {
    margin-right: 9px;
    width: 20px;
  }
  @media ${query.L_3} {
    margin-right: 5px;
    width: 16px;
  }
  @media ${query.L} {
    width: 24px;
  }
  @media ${query.XS} {
    width: 16px;
  }
`
const Addres = styled.div`
  ${font('dark', 14, 600)};
  text-wrap: nowrap;

  @media ${query.L_2} {
    font-size: 13px;
  }

  @media ${query.L_3} {
    font-size: 12px;
  }
  @media ${query.L} {
    font-size: 14px;
  }
  @media ${query.XM} {
    font-size: 12px;
  }
  @media ${query.M_2} {
    font-size: 13px;
  }
  @media ${query.M} {
    font-size: 11px;
  }
  @media ${query.XS} {
    font-size: 10px;
  }
`

export const S = {
  GeolocationItem,
  Icon,
  Addres,
}
