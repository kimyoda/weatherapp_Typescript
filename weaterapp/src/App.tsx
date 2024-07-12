import React, { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather/CurrentWeater";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import { getWeather } from "./services/WeatherService";
import "./App.css";

import sun from "../../weaterapp/src/assets/images/sun.jpg";
import clouds from "../../weaterapp/src/assets/images/clouds.jpg";
import fog from "../../weaterapp/src/assets/images/fog.jpg";
import rain from "../../weaterapp/src/assets/images/rain.jpg";
import sky from "../../weaterapp/src/assets/images/sky.jpg";
import snow from "../../weaterapp/src/assets/images/snow.jpg";
import thunder from "../../weaterapp/src/assets/images/thunder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const weatherImages: Record<string, string> = {
    "clear sky": sky,
    "few clouds": clouds,
    "scattered clouds": clouds,
    "partly cloudy": clouds,
    "overcast cloudy": clouds,
    "broken clouds": clouds,
    "light rain": rain,
    "moderate rain": rain,
    "heavy rain": rain,
    showers: rain,
    thunderstorm: thunder,
    snow: snow,
    mist: fog,
    fog: fog,
    haze: fog,
    smoke: fog,
  };

  const generateBackgroundStyle: { backgroundImage: string } = {
    backgroundImage: `url(${weatherImages[data?.weather[0]?.description] || sun})`,
  };

  const handleSearch = (city: string) => {
    getWeather(city)
      .then((result) => {
        setData(result.data);
        setErrorMessage("정확한 도시 이름을 입력해주세요!");
      })
      .catch(() => {
        setErrorMessage("정확한 도시 이름을 입력해주세요!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const defaultCity = "Seoul";
    setIsLoading(true);

    getWeather(defaultCity)
      .then((result) => {
        setData(result.data);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="weather-app">
      {isLoading && <Loader />}
      <div className="background" style={generateBackgroundStyle}></div>
      <div className="container">
        {errorMessage && (
          <p className="error-message">
            <FontAwesomeIcon icon={faWarning} className="icon-warning" />
            {errorMessage}
          </p>
        )}
        <SearchBar onSearchClick={handleSearch} />
        <CurrentWeather data={data} />
      </div>
    </div>
  );
};

export default App;
