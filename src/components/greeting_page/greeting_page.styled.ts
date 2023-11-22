import styled from "styled-components"
import { colors } from "../../utils/colors"
import { contentWidthSizing } from "../../utils/constants";
import { flex, font } from "../../utils/styles"

const imageHeight = 710;
const hundredValue = 100;
const textPartValue = 40;
const imagePartValue = hundredValue - textPartValue;

const Content = styled.div`
  ${flex("row", "center", "space-around")};
  min-height: ${imageHeight}px;
  ${contentWidthSizing};
`
const ContentTextBox = styled.div`
  ${flex("column", "flex-start", "space-between")};
  width: ${textPartValue}%;
`
const TitleContainer = styled.div`
  ${flex("row", "center", "center")};
  ${font("dark", 35, 600)};
  padding-bottom: 7px;
`
const Discription = styled.div`
  ${font("dark", 24, 400)};
  padding-bottom: 27px;
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
`
const ImageContainer = styled.div`
  ${flex()};
  width: ${imagePartValue}%;
  min-height: ${imageHeight}px;
`
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
