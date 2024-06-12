import { useState, useEffect } from 'react';
import { getWeather, dailyForecast, showWeather, getLocation } from 'react-native-weather-api';

let temp;
let wind;

getWeather({
			
	key: "613dbd4f0a37b1ec5f35a2fa95cb50ec",
	city: "London",
	country: "GB"

}).then(() => {

	let data = new showWeather();
	temp = data.temp;
	wind = data.wind;
});