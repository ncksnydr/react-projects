/**
 *    Packages & Utilities
 * -------------------------------------------------- */
import { WeatherSunEventProps } from "../Types";
import { getWeatherIcon } from "../utilities/getWeatherIcon";


function WeatherSunEvent({
	title,
	icon,
	time
}:WeatherSunEventProps) {
	return(
		<div className="weather-app-details-sun-event event-node">
			<h4 className="sun-event-title event-node-header">{title}</h4>
			<div className="sun-event-icon-time event-node-icon-wrapper">
				<div className="sun-event-icon event-node-icon">
					{getWeatherIcon(icon)}
				</div>
				<p className="sun-event-timestamp event-node-data">{time}</p>
			</div>
		</div>
	)
}

export default WeatherSunEvent;
