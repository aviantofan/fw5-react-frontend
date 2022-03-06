import http from "../../helpers/http"

export const getVehicleDetail = (id) => {
  return {
    type: 'GET_DETAIL',
    payload: http().get(`/vehicles/${id}`)
  }
}