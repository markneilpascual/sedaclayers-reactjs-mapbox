import axios from "axios";

export const setCountries = (countries) => {
  return {
    type: "SET_COUNTRIES",
    payload: countries,
  };
};

