import request from "./request"

export const getBanner = () => {
  return request.get("/banner");
};

export const getPersonalized = () => {
  return request.get('/personalized')
};

