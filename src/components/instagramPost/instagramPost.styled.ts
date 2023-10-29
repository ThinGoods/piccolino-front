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
  object-fit: cover;
  filter: blur(0.4px);
`
export const S = {
  ImgBox: ImgBox,
  ImageContainer: ImageContainer,
}
