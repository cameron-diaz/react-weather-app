export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e221bd1fdmsh41e165f886b857dp1a0fa0jsn0937b0a53033',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'
export const weatherApiKey = '94a8c6a677b887143debb047a016179c'


// try {
// 	const response = await fetch(GEO_API_URL, geoApiOptions);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }