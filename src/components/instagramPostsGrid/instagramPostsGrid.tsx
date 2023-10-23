import { InstagramPost } from "../instagramPost/instagramPost";
import { S } from "./instagramPostsGrid.styled";
import { IInstagramPostsGridProps } from "./instagramPostsGrid.types";

export function InstagramPostsGrid (props: IInstagramPostsGridProps) {
  
  return (
    <S.Table>
      {
        props.pictureArray.map((data, index) => (
        <InstagramPost source={data} key={index} />
        ))
      }
    </S.Table>
  )
}
