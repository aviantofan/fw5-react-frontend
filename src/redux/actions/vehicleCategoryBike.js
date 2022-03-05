import http from "../../helpers/http"

export const getCategoryBike = () => {
  return {
    type: 'GET_BIKE',
    payload: http().get('/vehicles/category?categoryId=3&limit=4')
  }
}