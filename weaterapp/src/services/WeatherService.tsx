import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const baseUrl = process.env.REACT_APP_API_ENDPOINT;
const baseUrlGeo = process.env.REACT_APP_API_GEOLOCATION;

const getWeather = (cityName: string) => {
  return axios.get(`${baseUrl}/weather?q=${cityName}&appid=${api_key}`);
};

const getCoordinates = (cityName: string) => {
  return axios.get(`${baseUrlGeo}?q=${cityName}&appid=${api_key}`);
};

const getForecast = (lat: number, lon: number) => {
  return axios.get(
    `${baseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`
  );
};

export { getWeather, getCoordinates, getForecast };
