import {
  FETCH_SERVICE_FAILURE,
  FETCH_SERVICE_REQUEST,
  FETCH_SERVICE_SUCCESS,
} from "./serviceTypes";

const url = "https://admin.naxa.com.np/api/services";

export function fetchServiceRequest() {
  return {
    type: FETCH_SERVICE_REQUEST,
  };
}

export function fetchServiceSuccess(services) {
  return {
    type: FETCH_SERVICE_SUCCESS,
    payload: services,
  };
}

export function fetchServiceFailure(errors) {
  return {
    type: FETCH_SERVICE_FAILURE,
    payload: errors,
  };
}

export function fetchService() {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}
