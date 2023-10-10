/**
 *    Packages & Utilities
 * -------------------------------------------------- */
import { WeatherDetailsProps, WeatherForecast } from "../Types";
import { getDateTimestamp, getFormattedDate } from "../utilities/formatDates";

/**
 *    Components
 * -------------------------------------------------- */
import WeatherForecastDaily from "./WeatherForecastDaily";
import WeatherSunEvent from "./WeatherSunEvent";

function WeatherDetails({ 
city, 
latitude, 
longitude,
forecast,
sun
}: WeatherDetailsProps) {

	/**
	 *    Variables
	 * -------------------------------------------------- */
	const today = getFormattedDate("YYYY-MM-DD");
	let forecastDays: string[] = [];

	return(
		<>
			<div className="weather-app-details-location">
				<h2 className="weather-app-details-city mb-6">{city}</h2>
				<div className="weather-app-details-sun-events event-node-wrapper grid-cols-2 mb-4">
					<WeatherSunEvent 
						title="Sunrise"
						icon="sunrise"
						time={sun.sunrise}
					/>
					<WeatherSunEvent 
						title="Sunset"
						icon="sunset"
						time={sun.sunset}
					/>
				</div>
			</div>

			<div className="weather-app-details-forecast event-node-wrapper grid-cols-3 mb-8">
				{
					forecast.map((daily:any, index:number) => {
						const dateTimestamp = getDateTimestamp(daily.dt);
						if ((!forecastDays.includes(dateTimestamp)) && (dateTimestamp !== today)) {
							forecastDays.push(dateTimestamp);
							if (forecastDays.length <= 3) {
								return(
									<WeatherForecastDaily 
										key={index}
										forecastDailyDay={getFormattedDate("ddd", daily.dt)}
										forecastDailyIcon={daily.weather[0].icon}
										forecastDailyTemp={daily.main.temp}
										forecastDailyTitle={daily.weather[0].main}
									/>
								)
							}
						}
					})
				}
			</div>
		</>
	)
}

export default WeatherDetails;
