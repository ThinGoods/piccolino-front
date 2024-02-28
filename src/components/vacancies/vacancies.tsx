import { vacancies } from "../../utils/menu"
import { Spacer } from "../spacer/spacer"
import { S } from "./vacancies.styled"

export const Vacancies = () => {
  return (
    <S.Container id={vacancies.anchor}>
      <Spacer size={60} />
      <S.Title>Вакансії</S.Title>
      <S.Content></S.Content>
      <Spacer size={60} />
    </S.Container>
  )
}
