import iconLogo from '../../assets/icons/gps.svg'
import { S } from './addresLine.style';
import { IAddresLineProps } from './addresLine.types';

export const AddresLine = ({addres}:IAddresLineProps) => {
  return (
    <S.GeolocationItem>
      <S.Icon src={iconLogo} />
      <S.Addres> {addres} </S.Addres>
    </S.GeolocationItem>
  )
}
