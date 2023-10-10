import { WeatherIcons } from "../Types";
import { 
	WiCloud,
	WiCloudy, 
	WiDayCloudy,
	WiDaySunny,
	WiDust,
	WiNightAltCloudy,
	WiNightAltRain,
	WiNightAltSnow,
	WiNightAltThunderstorm,
	WiNightClear,
	WiRain,
	WiSnow,
	WiSunrise,
	WiSunset,
	WiThunderstorm
} from "react-icons/wi";

const weatherIcons:WeatherIcons = {
	'01d': <WiDaySunny />,
	'01n': <WiNightClear />,
	'02d': <WiDayCloudy />,
	'02n': <WiNightAltCloudy />,
	'03d': <WiCloud />,
	'03n': <WiCloud />,
	'04d': <WiCloudy />,
	'04n': <WiCloudy />,
	'09d': <WiRain />,
	'09n': <WiNightAltRain />,
	'10d': <WiRain />,
	'10n': <WiNightAltRain />,
	'11d': <WiThunderstorm />,
	'11n': <WiNightAltThunderstorm />,
	'13d': <WiSnow />,
	'13n': <WiNightAltSnow />,
	'50d': <WiDust />,
	'50n': <WiDust />,
	'sunrise': <WiSunrise />,
	'sunset': <WiSunset />
};

export const getWeatherIcon = (iconCode:string) => {
	return weatherIcons[iconCode];
};