import { useGetImageWidth } from "./hooks/useGetImageSize";
import { S } from "./instagramPost.styled";
import { IInstagramPostProps } from "./instagramPost.type";

export function InstagramPost (props: IInstagramPostProps) {
  const imageWidth = useGetImageWidth();

  return (
    <S.ImgBox imageWidth={imageWidth}>
      <S.ImageContainer src = {props.source} imageWidth={imageWidth}></S.ImageContainer>
    </S.ImgBox>
  )
}
