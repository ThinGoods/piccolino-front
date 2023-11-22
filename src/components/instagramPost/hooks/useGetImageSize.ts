import { useEffect, useState } from "react";
import useScrollbarSize from "react-scrollbar-size";
import { calculateHeaderPercentWidth } from "../../../utils/constants";

export const useGetImageWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const scrollBarSize = useScrollbarSize();
  const clientWidth = screenWidth - scrollBarSize.width;
  const gridContainerWidth = (clientWidth / 100) * calculateHeaderPercentWidth();
  const imageWidth = gridContainerWidth / 4 - 1;

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
