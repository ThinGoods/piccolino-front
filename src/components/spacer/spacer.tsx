import styled from "styled-components"

const Container = styled.div <{ height: number }>`
    min-width: 0px;
    max-width: 0px;
    height: ${props => props.height}px;
`

export interface ISpacerProps {
  size?: number;
}

/* props which fuction is cunsuming is an OBJECT */
export const Spacer = ( { size = 50 } : ISpacerProps) => {
  return (
    < Container height={size} />
  )
}
