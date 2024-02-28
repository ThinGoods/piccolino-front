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
  ${font(colors.dark, 40, 600)};
`
const Description = styled.div`
  ${font(colors.dark, 16, 400)};
`
const Content = styled.div`
  ${flex('row', 'center', 'center')};
  @media ${query.XM_1} {
    ${flex('column', 'center', 'center')};
  }
`
const Image = styled.img`
  width: 462px;
  margin-right: 28px;
  @media ${query.L} {
    width: 350px;
  }
  @media ${query.XM_1} {
    width: 320px;
    margin-right: 0px;
  }
  @media ${query.M_1} {
    width: 260px;
  }
  @media ${query.M_2} {
    width: 230px;
  }
  @media ${query.M} {
    width: 200px;
  }
`
const Information = styled.div`
  ${flex('column', 'flex-start', 'flex-start')};
  @media ${query.XM_1} {
    ${flex('column', 'center', 'center')};
  }
`
const Author = styled.div`
  ${font(colors.dark, 16, 600)};
  @media ${query.XM_1} {
    padding-top: 10px;
  }
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
