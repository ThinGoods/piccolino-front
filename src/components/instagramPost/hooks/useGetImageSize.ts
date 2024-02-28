import { useEffect, useState } from "react";
import useScrollbarSize from "react-scrollbar-size";
import { useCurentScreenSize } from "../../../hooks/useCurrentScreenSize/useCurentScreenSize";
import { calculateHeaderPercentWidth } from "../../../utils/constants";

export const useGetImageWidth = (): number => {
  const screenSize = useCurentScreenSize();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const scrollBarSize = useScrollbarSize();
  const clientWidth = screenWidth - scrollBarSize.width;
  const gridContainerWidth = (clientWidth / 100) * calculateHeaderPercentWidth();

  let quantity = 0;
  if ( screenSize.isSizeL && !screenSize.isSizeM_1) { 
    quantity = 3;
  } else if ( screenSize.isSizeM_1 ) { 
    quantity = 2;
  } else {
    quantity = 4;
  }
  const imageWidth = gridContainerWidth / quantity - 1;

  useEffect(() => {
    const updateDimension = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    }
  }, []);

  return imageWidth
}
