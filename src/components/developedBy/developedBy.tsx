import { Spacer } from "../spacer/spacer"
import { S } from "./developedBy.styled"
import linkedInIcon from "../../assets/icons/linkedin.svg" 
import { openNewTab } from "../../utils/navigations"
import { developerName, linkedInUrl } from "../../utils/data"

export const DevelopedBy = () => {
  // console.log(process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN);
  const handleOpenLinkedIn = () => {
    openNewTab(linkedInUrl);
  }
  return (
    <S.Container>
      <S.Text>Розробка сайту - {developerName}</S.Text>
      <S.Icon src={linkedInIcon} onClick={handleOpenLinkedIn}/>
      <Spacer size={36}/>
    </S.Container>
  )
}
