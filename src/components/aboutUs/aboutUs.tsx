import { S } from "./aboutUs.styled"
import andrewCoolPhoto from '../../assets/imgs/andrewCoolPhoto.png'
import { Spacer } from "../spacer/spacer"

export const AboutUs = () => {
  return (
    <S.Container>
      <Spacer size={126} />
      <S.Title>Про Piccolino</S.Title>
      <Spacer size={30} />
      <S.Description>На високих гривах гір кругом яру зеленіє старий ліс, як зелене море, вкрите хвилями.</S.Description>
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
            Не так давно я відкрив свою на точку на Інтернаціоналістів. Багато знайомих говорили, що це дуже далеко, спальний район, і важко буде у цьому місці робити бізнес. Але люди приходять, і мені приємно, що є гості, які приїжджають з Ганнівки чи Садів, аби випити в «Piccolino coffee» чашку кави. Для мене важливо, щоб людина йшла не лише за напоями, а й за емоціями. Найцінніше, коли гість повертається, отже я недаремно займаюся своєю справою. За цей невеликий період, що тут стою, дуже багато людей мене знають. Чим мені подобається професія бариста, так це знайомствами.
          </S.Paragraph>
          <Spacer size={30} />
          <S.Paragraph>
            Чому Piccolino так називається?
          </S.Paragraph>
        </S.Information>
      </S.Content>
    </S.Container>
  )
}
