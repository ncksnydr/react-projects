import { ReactElement } from "react"

export interface WeatherForecastDay {
	id: number,
	main: string,
	description: string,
	icon: string
};

export interface WeatherForecast {
	dt: number,
	main: {
		temp: number,
		feels_like: number,
		temp_min: number,
		temp_max: number,
		pressure: number,
		sea_level: number,
		grnd_level: number,
		humidity: number,
		temp_kf: number
	},
	weather: Array<WeatherForecastDay>,
	clouds?: {
		all: number
	},
	wind?: {
		speed: number,
		deg: number,
		gust: number
	},
	visibility?: number,
	pop?: number,
	sys?: {
		pod: string
	},
	dt_txt: string
};

export interface WeatherSunData {
	sunrise: string,
	sunset: string
};

export interface WeatherData {
	location: {
		name: string,
		country: string,
		coordinates: {
			lat: number,
			lon: number
		},
	},
	weather: Array<WeatherForecast>,
	sun: WeatherSunData
};


export interface WeatherDetailsProps {
	city: string,
	latitude: number,
	longitude: number,
	forecast: Array<WeatherForecast>,
	sun: WeatherSunData
}

export interface ZipCodeInputProps {
	currentZipCode: string,
	onUpdateZipCode: any
}

export interface WeatherOverviewProps {
	weatherType: string,
	weatherIcon: string,
	temperatureActual: number,
}

export type WeatherIcons = {
	[key:string]: ReactElement
}

export interface WeatherForecastDailyProps {
	key: number,
	forecastDailyDay: string,
	forecastDailyIcon: string,
	forecastDailyTemp: number,
	forecastDailyTitle: string
}

export interface WeatherSunEventProps {
	title: string,
	icon: string,
	time: string
}