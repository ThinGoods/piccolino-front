import styled from "styled-components"

const ImgBox = styled.div <{ imageWidth: number }>`
  ${(props) => (
    `max-height: ${props.imageWidth}px;
     max-width: ${props.imageWidth}px;
    `
  )};
`
const ImageContainer = styled.img <{ imageWidth: number }>`
  ${ ({imageWidth}) => (
    `width: ${imageWidth}px;
     height: ${imageWidth}px;
    `
  )};
`
export const S = {
  ImgBox: ImgBox,
  ImageContainer: ImageContainer,
}
