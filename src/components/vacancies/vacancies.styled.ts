import styled from "styled-components";
import { colors } from "../../utils/colors";
import { flex, font } from "../../utils/styles";

const Container = styled.div`
  ${flex('column', 'center', 'flex-start' )};
  width: 100%;
  background-color: ${colors.yellow};
`
const Title = styled.div`
  ${font(colors.dark, 40, 600)};
`
const Content = styled.div``

export const S = {
  Container,
  Title,
  Content,
}