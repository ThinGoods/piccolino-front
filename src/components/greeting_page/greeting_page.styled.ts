import styled from "styled-components"
import { colors } from "../../utils/colors"
import { headerPercentWidth } from "../../utils/constants";
import { flex, font } from "../../utils/styles"

const imageHeight = 710;
const hundredValue = 100;
const textPartValue = 55;
const imagePartValue = hundredValue - textPartValue;
const imageShift = 30;
const imageInnerPartValue = 120;

const Content = styled.div`
  ${flex("row", "center", "space-around")}
  min-height: ${imageHeight}px ;
  width: ${headerPercentWidth}%;
`

const ContentTextBox = styled.div`
  ${flex("column", "flex-start", "space-between")}
  width: ${textPartValue}%;
`

const TitleContainer = styled.div`
  ${flex("row", "center", "center")};
  ${font("dark", 48, 600)}
  padding-bottom: 7px;
`

const Discription = styled.div`
    ${font("dark", 24, 400)}
    padding-bottom: 27px;
`

const CofeButton = styled.div`
  ${font(colors.dark, 20, 500)}
  ${flex()}
  padding-left: 24px;
  padding-right: 24px;
  height: 62px;
  border-radius: 30px;
  cursor: pointer;
  background-color: #FFCB00;
`

const ImageContainer = styled.div`
  width: ${imagePartValue}%;
  min-height: ${imageHeight}px;
  position: relative;
`

const Image = styled.img`
  position: absolute;
  width: ${imageInnerPartValue + imageShift}%;
  left: -${imageShift}%;
  top: 0px;
  bottom: 0px;
`

const Piccolino = styled.div`

`
const PiccolinoDiscription = styled.div`

`
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