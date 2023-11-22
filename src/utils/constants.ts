import { query, ScreenSizes } from "./mediaQueries";

const contentWidthTemplates = {
  general: 75,
  normal: 85,
  small: 90,
  extraSmall: 93,
}

export const calculateHeaderPercentWidth = (): number => {
  const screenWidth = window.innerWidth;
  const { general, normal, small, extraSmall } = contentWidthTemplates;

  if (screenWidth > ScreenSizes.XL_1) return general
  else if (screenWidth > ScreenSizes.L_1) return normal
  else if (screenWidth > ScreenSizes.L_2) return small
  else return extraSmall
}

export const contentWidthSizing = `
  width: ${contentWidthTemplates.general}%;
  @media ${query.XL_1} {
    width: ${contentWidthTemplates.normal}%;
  }
  @media ${query.L_1} {
    width: ${contentWidthTemplates.small}%;
  }
  @media ${query.L_2} {
    width: ${contentWidthTemplates.extraSmall}%;
  }
`
export const headerWidthTemplates = {
  general: 150,
  small: 127,
  extraSmall: 97, 
}

export const headerHeightSizing = `
  min-height: ${headerWidthTemplates.general}px;
  @media ${query.XL} {
    min-height: ${headerWidthTemplates.small}px;
  }
  @media ${query.L} {
    min-height: ${headerWidthTemplates.extraSmall}px;
  }
  
`

export const rootContainerId = 'halohenovuy';
export const INSTAGRAM_DOMAIN = 'https://graph.instagram.com/me/media';
export const GOOGLE_DOMAIN = 'https://maps.googleapis.com/maps/api/place/details/json';


// let name; // author_name
// let avatarPicture; // profile_photo_url
// let timeFromSubmitingReview; // relative_time_description

// let absoluteTime; // time

// let rating; // rating
// let reviewText; // text 
