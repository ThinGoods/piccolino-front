import { CoffeeContent } from "../coffeeContent/coffeeContent"
import { CoffeeItem } from "../coffeeItem/coffeeItem"
import { S } from './partnersCoffee.styled'
import { Spacer } from "../spacer/spacer"
// import { partnersCoffeeList } from "../../utils/data"
import { Button } from "../button/button"
import { partnersCoffee } from "../../utils/menu"
import axios from "axios"
import { useEffect, useState } from "react"
import { ICoffeeItem } from "../../utils/data.types"

export const PartnersCoffee = () => {
  const handleShowMore = () => {
    console.log('tyt blyat bydyt pokazuvatsya nowui cofe');
  };

  const [responseData, setResponseData] = useState<Array<ICoffeeItem>>([]);

  const getcoffeeItems = async () => {

    try {
      const response = await axios.get(
        'http://localhost:5000/api/partnerCoffeeItems',
        { params: {isPartnership: true}} 
      );
      setResponseData(response.data);
      console.log("OneLove coffee data from server", response.data);
    } catch(error) {
      console.log("Error while getting coffeeItems :) ", error);
    }
    
  };
  useEffect(() => {
    getcoffeeItems();
  }, []);
  console.log("ONELOVE Fresh data before return: ", responseData);

  return (
    <S.Content id={partnersCoffee.anchor}>
      <Spacer size={60} />
      <CoffeeContent 
        title="Кава від наших партнерів"
        description="100% арабіка класу Specialty"
      />
      
      <S.CoffeeItemContainer>
        {responseData.map((elem) => (
          <CoffeeItem key={elem._id} coffeeItem={elem}/>
        ))}
      </S.CoffeeItemContainer>
      <Spacer size={68} />

      <Button 
        text="Завантажити більше"
        withTouchableArea={true}
        onClick={handleShowMore}
      />
      {/* <Button text="Завантажити більше" withTouchableArea/> --- TRUE also BE transmited */}
    </S.Content>
  )
}
