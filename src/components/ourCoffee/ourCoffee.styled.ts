import styled from "styled-components"
import { headerPercentWidth } from "../../utils/constants"
import { font, flex } from "../../utils/styles"

const Content = styled.div`
  ${flex('column', 'center', 'space-between')};
  width: ${headerPercentWidth}%;
`
const Title = styled.div`
  ${font("dark", 40, 600)};
  
`
const Description = styled.div`
  ${font("dark", 16, 400)};
`
const CoffeeItemContainer = styled.div`
  ${flex('row', 'center', 'space-between')};
  flex-wrap: wrap;
  width: 100%;
` 
export const S = {
  Content,
  Title,
  Description,
  CoffeeItemContainer
}
