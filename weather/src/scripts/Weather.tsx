/**
 *    Packages & Utilities
 * -------------------------------------------------- */
import axios from 'axios';
import { useState, useEffect } from "react";
import { WeatherData } from './Types';
import { convertTimecodeToClock } from "../scripts/utilities/formatDates";

/**
 *    Components
 * -------------------------------------------------- */
import WeatherOverview from './components/WeatherOverview';
import WeatherDetails from './components/WeatherDetails';
import ZipCodeInput from "./components/ZipCodeInput";
import '../styles/Weather.css';


function Weather({ defaultZip }: { defaultZip:string }) {
	
	/**
	 *    Variables
	 * -------------------------------------------------- */
  const openWeatherApiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
	const defaultZipCode = (defaultZip) ? defaultZip : '90210';
	const localTesting = false;

	/**
	 *    States
	 * -------------------------------------------------- */
	let [isLoading, setIsLoading] = useState(true);
	let [zipCode, setZipCode] = useState(defaultZipCode);
	let [weatherData, setWeatherData] = useState<any>([]);

	/**
	 *    Functions
	 * -------------------------------------------------- */

	/**
	 * getWeatherData
	 * Fetches weather data with the provided ZIP code.
	 * @param zipCode 
	 */
	const getWeatherData = async (zipCode:string) => {

		const apiUrl = (localTesting) ? 
			'./forecast3day-new.json' :
			`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},US&appid=${openWeatherApiKey}&units=imperial`;

		axios.get(apiUrl)
			.then(response => {
				const data = response.data;
				let weatherDataResults:WeatherData = {
					location: {
						name: data.city.name,
						country: data.city.country,
						coordinates: {
							lat: data.city.coord.lat,
							lon: data.city.coord.lon
						}
					},
					weather: data.list,
					sun: {
							sunrise: convertTimecodeToClock(data.city.sunrise, data.city.timezone),
							sunset: convertTimecodeToClock(data.city.sunset, data.city.timezone),
					}
				};
				setWeatherData(weatherDataResults);
				setIsLoading(false);
			});
	};


	/**
	 *    Lifecycle
	 * -------------------------------------------------- */
  useEffect(() => {
		setIsLoading(true);
		getWeatherData(zipCode);
	},[zipCode]);

  return (
			<>
			{
				!isLoading &&
				<article className="weather-app">
					<section className="weather-app-overview lg:w-2/5">
						<WeatherOverview 
							weatherType={weatherData['weather'][0]['weather'][0]['main']}
							weatherIcon={weatherData['weather'][0]['weather'][0]['icon']}
							temperatureActual={weatherData['weather'][0]['main']['temp']}
						/>
					</section>

					<section className="weather-app-details lg:w-3/5">
						<WeatherDetails
							city={weatherData['location']['name']}
							latitude={weatherData['location']['coordinates']['lat']}
							longitude={weatherData['location']['coordinates']['lon']}
							forecast={weatherData['weather']}
							sun={weatherData['sun']}
						/>
						<ZipCodeInput 
							currentZipCode={zipCode}
							onUpdateZipCode={(zip:string) => setZipCode(zip)}
						/>
					</section>
				</article>
				
			}
		
			</>
		
  );
}



export default Weather;
