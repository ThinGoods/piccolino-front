import iconLogo from '../../assets/icons/gps.svg'
import { openNewTab } from '../../utils/navigations';
import { S } from './addresLine.style';
import { IAddresLineProps } from './addresLine.types';

export const AddresLine = ({location}:IAddresLineProps) => {

  const handleOpenLocation = () => {
    openNewTab(location.mapUrl);
  }
  return (
    <S.GeolocationItem onClick={handleOpenLocation}>
      <S.Icon src={iconLogo} />
      <S.Addres > {location.localStreet} </S.Addres>
    </S.GeolocationItem>
  )
}
