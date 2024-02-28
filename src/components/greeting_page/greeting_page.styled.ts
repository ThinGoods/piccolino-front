import styled from "styled-components"
import { colors } from "../../utils/colors"
import { contentWidthSizing, textPartValuesTemplate } from "../../utils/constants";
import { query } from "../../utils/mediaQueries";
import { flex, font } from "../../utils/styles"

const imageHeight = 710;
const hundredValue = 100;
// const textPartValue = 40;
// const imagePartValue = hundredValue - textPartValuesTemplate.general;

const Content = styled.div`
  ${flex("row", "center", "space-around")};
  min-height: ${imageHeight}px;
  ${contentWidthSizing};
  @media ${query.L} {
    min-height: 70vh;
  }
`
const ContentTextBox = styled.div`
  ${flex("column", "flex-start", "space-between")};
  width: ${textPartValuesTemplate.general}%;
  @media ${query.XL_2} {
    width: ${textPartValuesTemplate.generalPlus}%;
  }
  @media ${query.L_1} {
    width: ${textPartValuesTemplate.half}%;
  }
  @media ${query.L} {
    ${flex("column", "center", "center")};
    z-index: 10;
    width: 100%;
  }
`
const TitleContainer = styled.div`
  ${flex("row", "center", "center")};
  ${font("dark", 35, 600)};
  padding-bottom: 7px;

  @media ${query.XL_2} {
    font-size: 33px;
  }
  @media ${query.L_1} {
    font-size: 31px;
  }
  @media ${query.M} {
    font-size: 23px;
  }
  @media ${query.XS} {
    font-size: 19px;
  }
`
const Discription = styled.div`
  ${font("dark", 24, 600)};
  padding-bottom: 27px;

  @media ${query.XL_2} {
    font-size: 22px;
  }
  @media ${query.L_1} {
    font-size: 20px;
  }
  @media ${query.M} {
    font-size: 12px;
  }
  @media ${query.XS} {
    font-size: 8px;
  }
`
const CofeButton = styled.div`
  ${font(colors.dark, 20, 500)};
  ${flex()};
  padding-left: 24px;
  padding-right: 24px;
  height: 62px;
  border-radius: 30px;
  cursor: pointer;
  background-color: #FFCB00;

  @media ${query.M} {
    height: 45px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: 18px;
  }
`
const ImageContainer = styled.div`
  ${flex()};
  width: ${hundredValue - textPartValuesTemplate.general}%;
  min-height: ${imageHeight}px;
  @media ${query.XL_2} {
    width: ${hundredValue - textPartValuesTemplate.generalPlus}%;
  }
  @media ${query.XL_2} {
    width: ${hundredValue - textPartValuesTemplate.half}%;
  }
  @media ${query.L} {
    z-index: 0;
    position: absolute;
    width: 100%;
    min-height: 90vh;
    opacity: 0.4;
  }
`
/* crop background image */
const Image = styled.img`
  width: 100%;
`
const Piccolino = styled.div``
const PiccolinoDiscription = styled.div``

export const S = {
  Content,
  ContentTextBox,
  TitleContainer,
  Piccolino,
  PiccolinoDiscription,
  Discription,
  CofeButton,
  ImageContainer,
  Image,
}
