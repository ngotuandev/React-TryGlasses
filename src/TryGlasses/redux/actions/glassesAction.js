import { TRY_GLASSES } from "../constants/glassesContants";

export const tryGlasses = (value) => {
  return {
    type: TRY_GLASSES,
    payload: value,
  };
};
