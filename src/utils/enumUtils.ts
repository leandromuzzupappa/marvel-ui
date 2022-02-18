export const getKeysFromEnum = (enumm: any) => {
  return Object.keys(enumm).map((option) => {
    return enumm[option as keyof typeof enumm];
  });
};
