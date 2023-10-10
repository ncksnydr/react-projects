/**
 *    Packages & Utilities
 * -------------------------------------------------- */
import { WeatherForecastDailyProps } from "../Types";
import { getWeatherIcon } from "../utilities/getWeatherIcon";


function WeatherForecastDaily({
	key,
	forecastDailyDay,
	forecastDailyIcon,
	forecastDailyTemp,
	forecastDailyTitle
}:WeatherForecastDailyProps) {
	return(
		<section 
			key={`forecast-${key}`}
			className="weather-app-details-forecast-daily event-node"
		>
			<h3 className="forecast-daily-day event-node-header">{forecastDailyDay}</h3>
			<div className="forecast-daily-icon-temp event-node-icon-wrapper">
				<div className="forecast-daily-icon event-node-icon">
					{getWeatherIcon(forecastDailyIcon)}
				</div>
				<p className="forecast-daily-temp event-node-data">
					{Math.round(forecastDailyTemp)}
				</p>
			</div>
		</section>
	);
}

export default WeatherForecastDaily;
