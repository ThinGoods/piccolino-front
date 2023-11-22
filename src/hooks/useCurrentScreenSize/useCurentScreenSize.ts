import { useEffect, useState } from "react";
import { ScreenSizes } from "../../utils/mediaQueries";
import { IScreenSize } from "./useCurentScreenSize.types";

const defaultScreenSize = {
  isSizeL: window.innerWidth <= ScreenSizes.L,
  isSizeM_2: window.innerWidth <= ScreenSizes.M_2,
}

export const useCurentScreenSize = (): IScreenSize => {
  const [screenSize, setScreenSize] = useState<IScreenSize>(defaultScreenSize);

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        isSizeL: window.innerWidth <= ScreenSizes.L,
        isSizeM_2: window.innerWidth <= ScreenSizes.M_2,
      })
    }
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    }
  }, []);

  return screenSize
}
