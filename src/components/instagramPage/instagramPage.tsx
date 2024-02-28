import { piccolinoInstagramURL } from "../../utils/data"
import { instagramPage } from "../../utils/menu"
import { openNewTab } from "../../utils/navigations"
import { InstagramPostsGrid } from "../instagramPostsGrid/instagramPostsGrid"
import { Spacer } from "../spacer/spacer"
import { S } from "./instagramPage.styled"

const handleOpenInstagram = () => {
  openNewTab(piccolinoInstagramURL);
}

export const InstagramPage = () => {
  return (
    <S.Container id={instagramPage.anchor}>
      <Spacer size={60}/>
      <S.Title>Ми в інстаграм &nbsp;<S.InstagramLink onClick={handleOpenInstagram}>@piccolino_coffee</S.InstagramLink></S.Title>
      <Spacer size={60} />

      <S.Content>
        <InstagramPostsGrid />
      </S.Content>
    </S.Container>
  )
}