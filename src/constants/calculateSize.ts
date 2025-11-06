interface calculateSizesReturnTypes {
  deskScale: number;
  deskPosition: [number, number, number];
  cubePosition: [number, number, number];
  reactLogoPosition: [number, number, number];
  ringPosition: [number, number, number];
  targetPosition: [number, number, number];
}

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean,
): calculateSizesReturnTypes => {
  return {
    deskScale: isSmall ? 6 : isMobile ? 8 : 13,
    deskPosition: isSmall
      ? [2.5, -5, -5]
      : isMobile
        ? [3, -5, -5]
        : [5, -8, -5],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [5, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [0, 4, 0]
          : [5, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-20, 10, 0]
          : [-9, 7, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-10, -10, -20],
  };
};
