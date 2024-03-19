import styled from "styled-components"
import { colors } from "../../utils/colors"
import { flex, font } from "../../utils/styles"

const Wraper = styled.div`
  ${flex('column')};
`
const Content = styled.div`
  ${flex('column', 'center', 'center')};
  background-color: ${colors.light};
`
const Image = styled.img`
  width: 268px;
  height: 268px;
`
const Description = styled.div`
  ${flex('column', 'center', 'center')};
`
const Country = styled.div`
  ${font(colors.dark, 20, 600)};
`
const Region = styled.div`
  ${font(colors.dark, 14, 500)};
`
const Descriptors = styled.div`
  ${font(colors.dark, 14, 400)};
`
const Parameters = styled.div`
  ${font(colors.dark, 12, 400)};
  width: 90%;
`
const Lable = styled.div`
`
const Value = styled.div`
`
const Record = styled.div`
  ${flex('row', 'center', 'space-between')};
`
const BottomBox = styled.div`
  ${flex('row', 'center', 'space-between')};
  width: 90%;
  
`
const WeightAndPriceBox = styled.div`
  ${flex('row', 'center', 'space-between')};
  width: 100%;
`
const Price = styled.div`
  ${font(colors.dark, 16, 600)};
`
const UahIcon = styled.img`
  width: 24px;
`
const Weight = styled.div`
  ${font(colors.dark, 12, 400)};
`
const OrderBox = styled.div`
  ${font( colors.darkOrage, 16, 500)};
  text-align: center;
  padding: 6px 16px 6px 16px;
  margin-left: 10px;
  border-radius: 40px;
  transition: 350ms;
  cursor: pointer;

  &:hover {
    background-color: ${colors.yellow};
    color: ${colors.dark};
  };
`
export const S = {
  Wraper,
  Content,
  Image,
  Description,
  Country,
  Region,
  Descriptors,
  Parameters,
  Record,
  Lable,
  Value,
  BottomBox,
  WeightAndPriceBox,
  Price,
  UahIcon,
  Weight,
  OrderBox
}
