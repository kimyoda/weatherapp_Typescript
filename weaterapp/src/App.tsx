import React, { useState } from "react";
import Loader from "./components/Loader/Loader";
import "./App.css";

import sun from "../../weaterapp/src/assets/images/sun.jpg";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [isLoding, setIsLoding] = useState<boolean>(false);

  const generateBackgroundStyle: { backgroundImage: string } = {
    backgroundImage: `url(${sun})`,
  };

  return (
    <div className="weather-app">
      {isLoding && <Loader />}
      <div className="background" style={generateBackgroundStyle}></div>
      <SearchBar onSearchClick={() => {}} />
    </div>
  );
};

export default App;
