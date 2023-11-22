import styled from "styled-components"
import { colors } from "../../utils/colors"
import { contentWidthSizing } from "../../utils/constants"
import { flex, font } from "../../utils/styles"

const Container = styled.div`
  ${flex('column', 'center', 'flex-start')};
  ${contentWidthSizing};
`
const Title = styled.div`
  ${flex('row', 'center', 'center')};
  ${font(colors.dark, 40, 600)};
  line-height: 48px;
`
const InstagramLink = styled.div``
const Content = styled.div``

export const S = {
  Container,
  Title,
  Content,
  InstagramLink,
}
