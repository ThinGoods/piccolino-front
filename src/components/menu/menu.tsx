import { menuItems } from "../../utils/menu"
import { handleMenuItemClick } from "../../utils/navigations"
import { S } from "./menu.styled"
import { IMenuProps } from "./menu.types"

export const Menu = (props: IMenuProps) => {

  return (
      <S.MenuContainer>
        {menuItems.map((item) => (
          <S.MenuItem 
            key={item.id} 
            onClick={handleMenuItemClick(item.anchor)}>
            {item.text}
          </S.MenuItem>
        ))}
      </S.MenuContainer>
    )
}
