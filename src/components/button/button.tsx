import { S } from "./button.style"
import { IButton } from "./button.type"

export const Button = ({text, onClick, withTouchableArea = false}:IButton) => {

  return (
    <S.ButtonContainer
      withPaddings={withTouchableArea} 
      onClick={onClick}
    >
      {text}
    </S.ButtonContainer>
  )
}
