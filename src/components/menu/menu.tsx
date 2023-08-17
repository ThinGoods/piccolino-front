import { S } from "./menu.style"
import { IItem, IMenuProps} from "./menu.types"

export const Menu = (props: IMenuProps) => {
  return (
      <S.MenuContainer>
        {menuItems.map((item) => (
          <S.MenuItem key={item.id}>
            {item.text}
          </S.MenuItem>
        ))}
      </S.MenuContainer>
    )
}

const menuItems: Array<IItem> = [
  {
    id:1,
    text: "Наша кава"
  },
  {
    id:2,
    text: "Від партнерів"
  },
  {
    id:3,
    text: "Де нас знайти "
  },
  {
    id:4,
    text: "Про Піколіно"
  },
  {
    id:5,
    text: "Ми в інстаграм"
  },
  {
    id:6,
    text: "Вакансії"
  },
  {
    id:7,
    text: "Відгуки"
  },
  {
    id:8,
    text: "Контакти"
  }
];