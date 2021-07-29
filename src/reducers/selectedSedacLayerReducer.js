const selectedSedacLayerReducer = (state = "", { type, payload }) => {
    switch (type) {
        case "SET_SELECTED_SEDAC_LAYER":
            return payload;
            break;

        default:
            return state;
            break;
    }
};

export default selectedSedacLayerReducer;
