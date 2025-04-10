import { S } from "./greeting_page.styled"
import greetingImage from "../../assets/imgs/greeting_page_Image.png"
import { goToAnchor } from "../../utils/navigations"
import { greetingPage, ourCofee } from "../../utils/menu"

export const Greeting_page = () => {
  const handleAnchorClick = () => {
    goToAnchor(ourCofee.anchor)
  }
  

  return (
    <S.Content id={greetingPage}>
      <S.ContentTextBox>
        <S.TitleContainer>
          <S.Piccolino>Piccolino</S.Piccolino>
          <S.PiccolinoDiscription>&nbsp;— кава з емоціями</S.PiccolinoDiscription>
        </S.TitleContainer>

        <S.Discription>Свіжообсмажена кава у Сумах</S.Discription>
        <S.CofeButton onClick={handleAnchorClick}>Обрати каву</S.CofeButton>
      </S.ContentTextBox>

      <S.ImageContainer>
        <S.Image src={greetingImage}/>
      </S.ImageContainer>
    </S.Content>
  )
}
