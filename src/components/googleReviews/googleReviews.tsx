import axios, { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { GOOGLE_DOMAIN } from "../../utils/constants";
import { googleReviews } from "../../utils/menu";
import { Spacer } from "../spacer/spacer"
import { S } from "./googleReviews.styled"

export const GoogleReviews = () => {

  const getGoogleReviews = async () => {
    try {
      const rerequestConfig: AxiosRequestConfig<any> = {
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': `${process.env.APY_KEY_GOOGLE_MAPS_PLATFORM}`,
          'X-Goog-FieldMask': '*',
        }
      }
      const reresponse = await axios.post(
        'https://places.googleapis.com/v1/places:searchText', 
        {textQuery: 'picolino'},
        rerequestConfig,
      )
      console.log(reresponse);
      // const requestConfig: AxiosRequestConfig<any> = {
        
      //   withCredentials: false,
      //   headers: {
      //     'Accept': '*/*',
      //     'Connection': 'keep-alive',
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Credentials': 'true',
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      //     'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
      //   },
      //   params: {
      //     key: process.env.APY_KEY_GOOGLE_MAPS_PLATFORM,
      //     placeid: process.env.PICCOLINO_PLACE_ID,
      //   }
      // };

      // const response = await axios.get(GOOGLE_DOMAIN, requestConfig);
      // const rawArray = response.data;
      // console.log(rawArray);
      // const filteredArray = rawArray.filter((element: IInstDataItem) => element.media_type === "IMAGE");
      
      // setInstData(filteredArray.slice(0,16));
    } catch(error) {
      console.log("Error while getting Google reviews ",error);
    }
  };

  useEffect(() => {
    getGoogleReviews();
  }, []);

  return (
    <S.Container id={googleReviews.anchor}>
      <S.Title>Відгуки</S.Title>
      <Spacer size={30} />

      <S.Content></S.Content>
      <Spacer size={60} />
    </S.Container>
  )
}
