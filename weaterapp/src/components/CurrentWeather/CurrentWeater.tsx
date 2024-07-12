import React from "react";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./current-weather.css";

import sun from "../../assets/images/sun.jpg";
import clouds from "../../assets/images/clouds.jpg";
import fog from "../../assets/images/fog.jpg";
import rain from "../../assets/images/rain.jpg";
import sky from "../../assets/images/sky.jpg";
import snow from "../../assets/images/snow.jpg";
import thunder from "../../assets/images/thunder.jpg";

export type CureentWeatherProps = {
  data: any;
};

const CurrentWeather: React.FC<CureentWeatherProps> = ({ data }) => {
  const currentDate: Date = new Date();
  const day: string = currentDate.getDate().toString().padStart(2, "0");
  const month: string = (currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0");
  const year: number = currentDate.getFullYear();
  const formatterDate: string = `${day}.${month}.${year}.`;

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

  return (
    <div className="current-weather" style={generateBackgroundStyle}>
      <div className="general-data">
        <span className="place">
          <FontAwesomeIcon icon={faLocation} className="icon-location" />
          {data?.name}
        </span>
        <span className="temperature">
          {Math.round(data?.main?.temp - 273.15)} °C
        </span>
        <span className="description">{data?.weather[0]?.description}</span>
      </div>

      <div className="details">
        <p className="date">
          <span>Today</span>
          <span>{formatterDate}</span>
        </p>

        <ul className="details-list">
          <li className="additional-details">
            wind:
            <span className="data">{data?.wind.speed} m/s</span>
          </li>

          <li className="additional-details">
            Pressure:
            <span className="data">{data?.main.pressure} mbar</span>
          </li>

          <li className="additional-details">
            Humidity:
            <span className="data">{data?.main.humidity} %</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentWeather;
