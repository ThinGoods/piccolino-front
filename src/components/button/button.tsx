import { S } from "./button.style"
import { IButton } from "./button.type"

export const Button = ({text, withTouchableArea = false}:IButton) => {
  return (
    <S.Button withPaddings = {withTouchableArea}>{text}</S.Button>
  )
}