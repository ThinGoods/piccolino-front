import { Spacer } from "../spacer/spacer"
import { S } from "./vacancies.styled"

export const Vacancies = () => {
  return (
    <S.Container>
      <Spacer size={46} />
      <S.Title>Вакансії</S.Title>
      <S.Content></S.Content>
      <Spacer size={67} />
    </S.Container>
  )
}
