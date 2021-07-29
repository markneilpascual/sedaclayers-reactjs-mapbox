const sedacLayerReducer = (state = "", { type, payload }) => {
  switch (type) {
    case "SET_SEDAC_LAYER":
      return payload;
      break;

    default:
      return state;
      break;
  }
};

export default sedacLayerReducer;
