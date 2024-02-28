import styled from "styled-components"
import { contentWidthSizing } from "../../utils/constants"
import { query } from "../../utils/mediaQueries"
import { font, flex } from "../../utils/styles"

const Content = styled.div`
  ${flex('column', 'center', 'space-between')};
  ${contentWidthSizing};
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
  @media ${query.M_2} {
    ${flex('column', 'center', 'center')};
  }
` 
export const S = {
  Content,
  Title,
  Description,
  CoffeeItemContainer
}
