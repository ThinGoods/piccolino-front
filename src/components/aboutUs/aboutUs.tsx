import { S } from "./aboutUs.styled"
import andrewCoolPhoto from '../../assets/imgs/andrewCoolPhoto.png'
import { Spacer } from "../spacer/spacer"
import { aboutUs } from "../../utils/menu"

export const AboutUs = () => {
  return (
    <S.Container id={aboutUs.anchor}>
      <Spacer size={60} />
      <S.Title>Про Piccolino</S.Title>
      <Spacer size={30} />
      <S.Description>Є кава, а є кава з душею, яку ми і готуємо.</S.Description>
      <Spacer size={32} />
      
      <S.Content>
        <S.Image src={andrewCoolPhoto}/>
        <S.Information>
          <S.Author>Андрій Познанський</S.Author>
          <Spacer size={20} />
          <S.Paragraph>
            Коли я повернувся з Італії 15 років тому, то в Україні стояли професійні кавомашини, але напої звідти були несмачними. Тобто люди навіть не знали, що робити з цим обладнанням та як на ньому варити. Зараз же кавова культура сильно змінилася та розвинулася. Кілька років тому я їздив до Італії, ходив по кав’ярнях, і зрозумів, що в Україні кава набагато краща, тож можу з упевненістю сказати, що ми розвиваємось у цьому напрямку.
          </S.Paragraph>
          <Spacer size={30} />
          <S.Paragraph>
            Не так давно я відкрив свою на точку на Інтернаціоналістів. Багато знайомих говорили, що це дуже далеко, спальний район і важко буде у цьому місці робити бізнес. Але люди приходять, і мені приємно, що є гості, які приїжджають з Ганнівки чи Садів, аби випити в «Piccolino coffee» чашку кави. Для мене важливо, щоб людина йшла не лише за напоями, а й за емоціями. Найцінніше, коли гість повертається, отже я недаремно займаюся своєю справою. За цей невеликий період, що тут стою, дуже багато людей мене знають. Бариста - це стиль життя! Чим мені подобається професія бариста?.
          </S.Paragraph>
          <Spacer size={30} />
          <S.Paragraph>
          Piccolino - переводиться з італійської мови як маленький. В своЇ 16 років Я був наймолодший бариста в закладі, а ще до того у нас в закладі ще був один Andrea. Моє прізвище італійцям в графіку було дуже важко писати і тому вони дали мені прізвисько Andrea Piccolino або Piccolo щоб не путати з колегою.
          </S.Paragraph>
        </S.Information>
      </S.Content>
    </S.Container>
  )
}
