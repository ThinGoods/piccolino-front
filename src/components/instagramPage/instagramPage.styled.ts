import styled from "styled-components"
import { colors } from "../../utils/colors"
import { contentWidthSizing } from "../../utils/constants"
import { query } from "../../utils/mediaQueries"
import { flex, font } from "../../utils/styles"

const Container = styled.div`
  ${flex('column', 'center', 'flex-start')};
  ${contentWidthSizing};
`
const Title = styled.div`
  ${flex('row', 'center', 'center')};
  ${font(colors.dark, 40, 600)};
  line-height: 48px;

  @media ${query.XM} {
    ${font(colors.dark, 30, 600)};
  }
  @media ${query.M_2} {
      ${font(colors.dark, 25, 600)};
  }
  @media ${query.M} {
      ${flex('column', 'center', 'center')};
  }
`
const InstagramLink = styled.div`
  ${font(colors.yellow, 40, 600)};
  transition: 400ms;
  cursor: pointer;

  &:hover {
    color: ${colors.darkYellow};
  }

  @media ${query.XM} {
      ${font(colors.yellow, 30, 600)};
  }
  @media ${query.M_2} {
      ${font(colors.yellow, 25, 600)};
  }
`
const Content = styled.div``

export const S = {
  Container,
  Title,
  Content,
  InstagramLink,
}
