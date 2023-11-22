import { S } from "./googleReviewsItem.styled"

export const GoogleReviewsItem = () => {
  
  return (
    <S.Container>
      <S.Title>
        <S.UserAvatar />

        <S.NameAndDate>
          <S.UserName></S.UserName>
          <S.RelativeTime></S.RelativeTime>
        </S.NameAndDate>

      </S.Title>

      <S.Score></S.Score>
      <S.Text></S.Text>
    </S.Container>
  )
}
