import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import SunnyIcon from "@mui/icons-material/Sunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  const INIT_URL = import.meta.env.VITE_INIT_URL;
  const HOT_URL = import.meta.env.VITE_HOT_URL;
  const COLD_URL = import.meta.env.VITE_COLD_URL;
  const RAIN_URL = import.meta.env.VITE_RAIN_URL;

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature: {info.temp}&deg;C</div>
              <div>Humidity: {info.humidity}</div>
              <div>Minimum Temperature: {info.tempMin}&deg;C</div>
              <div>Maximum Temperature: {info.tempMax}&deg;C</div>
              <div>
                The weather can be described as <i>{info.weather}</i> and feels
                Like: {info.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
