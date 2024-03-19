import { useEffect, useState } from "react";
import { menuItems } from "../../utils/menu"
import { handleMenuItemClick } from "../../utils/navigations"
import { S } from "./backdrop.styled"
import { IBackdropProps } from "./backdrop.types"

export const Backdrop = ({visible, hideBackdrop}:IBackdropProps) => {

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (visible) {setOpacity(1)};
  },[visible])

  if (!visible) {
    return null
  }

  const hideBackDrop = () => {
    setOpacity(0);
    setTimeout(hideBackdrop, 200);
  }
  return (

    <S.Container onClick={hideBackDrop} opacity={opacity}>
  
      <S.MenuContainer>
        {menuItems.map((item) => (
          <S.MenuItem key={item.id} onClick={handleMenuItemClick(item.anchor)}>
            {item.text}
          </S.MenuItem>
        ))}
      </S.MenuContainer>
    </S.Container>
  )
}