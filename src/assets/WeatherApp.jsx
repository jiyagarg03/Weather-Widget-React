// import SearchBox from "./SearchBox";
// import InfoBox from "./InfoBox";
// import { useState } from "react";

// export default function WeatherApp() {
//   const [weatherInfo, setWeatherInfo] = useState({
//     city: "Wonderland",
//     feelsLike: 24,
//     temp: 34,
//     tempMin: 25,
//     tempMax: 36,
//     humidity: 47,
//     weather: "haze",
//   });

//   let updateInfo = (newInfo) => {
//     setWeatherInfo(newInfo);
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Weather App by Siya!</h2>
//       <SearchBox updateInfo={updateInfo} />
//       <InfoBox info={weatherInfo} />
//     </div>
//   );
// }

import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 24,
    temp: 34,
    tempMin: 25,
    tempMax: 36,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="WeatherApp">
      <h1>Weather App by Siya!</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
