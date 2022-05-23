import dataGlass from "../../../dataGlasses/dataGlasses.json";
import { TRY_GLASSES } from "../constants/glassesContants";

let initialState = {
  dataGlass,
  dataTryGlass: dataGlass[0],
};

export const TryGlassesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TRY_GLASSES: {
      state.dataTryGlass = payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
