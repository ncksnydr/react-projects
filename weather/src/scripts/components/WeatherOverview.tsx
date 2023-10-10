/**
 *    Packages & Utilities
 * -------------------------------------------------- */
import { WeatherOverviewProps } from "../Types";
import { getWeatherIcon } from "../utilities/getWeatherIcon";
import { getFormattedDate } from "../utilities/formatDates";


function WeatherOverview({ 
	weatherType,
	weatherIcon,
	temperatureActual,
}:WeatherOverviewProps) {

	return(
		<div className="weather-app-overview-data">
			<p className="weather-app-overview-day">{getFormattedDate('ddd MMM DD')}</p>
			<span className="weather-app-overview-temp">
				{Math.round(temperatureActual)}<sup>&deg;F</sup>
			</span>
			<div className="weather-app-overview-type">
				{getWeatherIcon(weatherIcon)}
				<span>{weatherType}</span>
			</div>
		</div>
	);
}

export default WeatherOverview;
