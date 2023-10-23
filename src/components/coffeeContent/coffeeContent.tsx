import { Spacer } from '../spacer/spacer'
import { S } from './coffeeContent.styled'
import { ICoffeeContentProps } from './coffeeContent.types'

export const CoffeeContent = (props: ICoffeeContentProps) => {
  const {title, description} = props;
  
  return (
    <S.Content>
      <S.Title>{title}</S.Title>
      <Spacer size={30} />
      <S.Description>{description}</S.Description>
      <Spacer size={40} />
    </S.Content>
  )
}

