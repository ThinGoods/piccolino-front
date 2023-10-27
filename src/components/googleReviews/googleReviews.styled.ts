import styled from "styled-components";
import { colors } from "../../utils/colors";
import { headerPercentWidth } from "../../utils/constants";
import { flex, font } from "../../utils/styles";

const Container = styled.div`
  ${flex('column', 'center', 'flex-start' )};
  width: ${headerPercentWidth}%;
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