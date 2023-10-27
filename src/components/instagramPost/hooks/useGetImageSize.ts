import { useEffect, useState } from "react";
import useScrollbarSize from "react-scrollbar-size";
import { headerPercentWidth } from "../../../utils/constants";

export const useGetImageWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const scrollBarSize = useScrollbarSize();
  const clientWidth = screenWidth - scrollBarSize.width;
  const gridContainerWidth = (clientWidth/100) * headerPercentWidth;
  const imageWidth = gridContainerWidth / 4;

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
