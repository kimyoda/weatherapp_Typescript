import React, { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import "./App.css";

import sun from "../../weaterapp/src/assets/images/sun.jpg";
import SearchBar from "./components/SearchBar/SearchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeater";
import { getWeather } from "./services/WeatherService";

const App = () => {
  const [isLoding, setIsLoding] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  const generateBackgroundStyle: { backgroundImage: string } = {
    backgroundImage: `url(${sun})`,
  };

  useEffect(() => {
    const defaultCity = "Seoul";
    setIsLoding(true);

    getWeather(defaultCity)
      .then((result) => {
        setData(result.data);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoding(false);
      });
  }, []);

  return (
    <div className="weather-app">
      {isLoding && <Loader />}
      <div className="background" style={generateBackgroundStyle}></div>
      <div className="container">
        <SearchBar onSearchClick={() => {}} />
        <CurrentWeather data={data} />
      </div>
    </div>
  );
};

export default App;
