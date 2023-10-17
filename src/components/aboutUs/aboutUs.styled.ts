import styled from "styled-components"
import { colors } from "../../utils/colors"
import { headerPercentWidth } from "../../utils/constants"
import { flex, font } from "../../utils/styles"

const Container = styled.div`
  ${flex('column', 'center', 'flex-start')};
  width: ${headerPercentWidth}%;
`
const Title = styled.div`
  ${font(colors.dark, 40, 600)};
`
const Description = styled.div`
  ${font(colors.dark, 16, 400)};
`
const Content = styled.div`
  ${flex('row', 'center', 'center')};
`
const Image = styled.img`
  width: 462px;
  margin-right: 28px;
`
const Information = styled.div`
  ${flex('column', 'flex-start', 'flex-start')};
`
const Author = styled.div`
  ${font(colors.dark, 16, 600)};
`
const Paragraph = styled.div`
  ${font(colors.dark, 14, 400)};
  line-height: 30px;
`

export const S = {
  Container,
  Title,
  Description,
  Content,
  Image,
  Information,
  Author,
  Paragraph,
}
