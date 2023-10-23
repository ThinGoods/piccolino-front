import { sourceImg } from "../../utils/importsOfPictures"
import { InstagramPostsGrid } from "../instagramPostsGrid/instagramPostsGrid"
import { Spacer } from "../spacer/spacer"
import { S } from "./instagramPage.styled"

export const InstagramPage = () => {
  return (
    <S.Container>
      <S.Title>Ми в інстаграм &nbsp;<S.InstagramLink>@piccolino_coffee</S.InstagramLink></S.Title>
      <Spacer size={70} />

      <S.Content>
        <InstagramPostsGrid pictureArray={sourceImg} />
      </S.Content>
    </S.Container>
  )
}