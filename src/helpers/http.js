import axios from "axios";

export const getData = async (url) => {
  const data = await axios.get(url)
  return data
}

const { REACT_APP_URL } = process.env

const http = (token) => axios.create({
  baseURL: REACT_APP_URL
})

export default http