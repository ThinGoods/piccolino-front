import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { INSTAGRAM_DOMAIN } from "../../utils/constants";
import { InstagramPost } from "../instagramPost/instagramPost";
import { S } from "./instagramPostsGrid.styled";
import { IInstagramPostsGridProps, IInstDataItem } from "./instagramPostsGrid.types";


export function InstagramPostsGrid (props: IInstagramPostsGridProps) {
  const [instData, setInstData] = useState<Array<IInstDataItem>>([]);

  //                                             THEN ___ CATCH EXAMPLE
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   axios.get(INSTAGRAM_DOMAIN, { 
  //     params: {
  //       fields: 'id,media_type,media_url',
  //       access_token: process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN,
  //     }
  //   })
  //   .then((response) => {
  //     const filteredArrayOfImages = response.data.data.filter((element: IInstDataItem) => element.media_type === "IMAGE");
  //     setInstData(filteredArrayOfImages.slice(0,16));
  //   })
  //   .catch((error) => console.log("Error while getting instagram images ",error))
  // }, []);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const getInstagramImages = async () => {
    try {
      const requestConfig: AxiosRequestConfig<any> = {
        params: {
          fields: 'id,media_type,media_url',
          access_token: process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN,
        }
      };

      const response = await axios.get(INSTAGRAM_DOMAIN, requestConfig);
      const rawArray = response.data.data;
      const filteredArray = rawArray.filter((element: IInstDataItem) => element.media_type === "IMAGE");
      
      setInstData(filteredArray.slice(0,16));
    } catch(error) {
      console.log("Error while getting instagram images ",error);
    }
  };

  useEffect(() => {
    getInstagramImages();
  }, []);

  return (
    <S.Table>
      {
        instData.map((data) => (
          <InstagramPost source={data.media_url} key={data.id} />
        ))
      }
    </S.Table>
  )
}
