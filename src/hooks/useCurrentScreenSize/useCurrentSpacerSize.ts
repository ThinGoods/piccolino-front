import { useCurentScreenSize } from "./useCurentScreenSize";

export const useCurrentSpacerSize = () => {
  const screenSize = useCurentScreenSize();
  let spacer = 60;

  if (screenSize.isSizeL) {
    spacer /= 2
  }
  return spacer
}



