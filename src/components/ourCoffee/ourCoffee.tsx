import axios from "axios"
import { useEffect, useState } from "react"
// import { ourCoffeeList } from "../../utils/data"
import { ICoffeeItem } from "../../utils/data.types"
import { ourCofee } from "../../utils/menu"
import { CoffeeContent } from "../coffeeContent/coffeeContent"
import { CoffeeItem } from "../coffeeItem/coffeeItem"
import { S } from '../ourCoffee/ourCoffee.styled'
import { Spacer } from "../spacer/spacer"

export const OurCoffee = () => {

  const [responseData, setResponseData] = useState<Array<ICoffeeItem>>([]);
  
  const getcoffeeItems = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/coffeeItems',
        { params: {isPartnership: false} } 
      );
      setResponseData(response.data);
      console.log("Piccolino coffee data from server", response.data);
    } catch(error) {
      console.log("Error while getting coffeeItems :) ", error);
    }
    
  };
  useEffect(() => {
    getcoffeeItems();
  }, []);
  console.log("PICOLINO Fresh data before return: ", responseData);
  
  return (
    <S.Content id={ourCofee.anchor}>
      <Spacer size={60}/>
      
      <CoffeeContent 
        title="Наша кава" 
        description="100% арабіка класу Specialty"
      /> 

      <S.CoffeeItemContainer>
        {responseData.map((elem) => (
          <CoffeeItem key={elem._id} coffeeItem={elem}/>
        ))}
      </S.CoffeeItemContainer>

    </S.Content>
  )
}
