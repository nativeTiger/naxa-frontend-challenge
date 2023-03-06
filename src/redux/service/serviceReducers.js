import {
  FETCH_SERVICE_FAILURE,
  FETCH_SERVICE_REQUEST,
  FETCH_SERVICE_SUCCESS,
} from "./serviceTypes";

const initialServiceState = {
  loading: true,
  services: [],
  errors: "",
};

export const serviceReducer = (state = initialServiceState, action) => {
  switch (action.type) {
    case FETCH_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload,
        errors: "",
      };
    case FETCH_SERVICE_FAILURE:
      return {
        ...state,
        loading: false,
        services: [],
        errors: action.payload,
      };
    default:
      return state;
  }
};
