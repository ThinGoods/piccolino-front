import { S } from "./button.style"
import { IButton } from "./button.type"

export const Button = ({text, onClick, withTouchableArea = false,}:IButton) => {

  return (
    <S.Button 
      withPaddings={withTouchableArea} 
      onClick={onClick}
    >
      {text}
    </S.Button>
  )
}
