import "./assets/styles/index.css";
import "./assets/styles/location.css";
import "./assets/styles/weather.css";

import cloudyda from "./assets/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg";
import cloudyds from "./assets/amcharts_weather_icons_1.0.0/static/cloudy-day-1.svg";
import raina from "./assets/amcharts_weather_icons_1.0.0/animated/rainy-6.svg";
import rains from "./assets/amcharts_weather_icons_1.0.0/static/rainy-6.svg";
import {
  defaultBackground,
  basicLayout,
  createLocationForm,
  displayLocationInformation,
  displayCurrentStats,
  hourlyForecast,
  weeklyForecast,
  hourlyTempRange,
} from "./modules/interface.js";

defaultBackground();
const pageContainers = basicLayout();
const formElements = createLocationForm(pageContainers.higherLevelInfoBox);
const locationInformation = displayLocationInformation(
  pageContainers.higherLevelInfoBox,
);
const weatherElements = displayCurrentStats(
  pageContainers.weatherContainer,
  cloudyda,
  cloudyds,
);

hourlyForecast(weatherElements.hourlyBox, cloudyds);
weeklyForecast(weatherElements.weeklyBox, cloudyds, rains);

async function getWeather(location) {
  const firstPartURL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const secondPartURL = "?key=";
  const thirdPartURL = "8WV8RQY4SDFNVVKDPKME29L6G";
  const fullURL = firstPartURL + location + secondPartURL + thirdPartURL;

  const response = await fetch(fullURL);
  const weatherData = await response.json();

  console.log(weatherData);
}

console.log(
  "REMINDER: 2/10 - things to add: hourly/weekly forecast, moonphase, pressure, solar energy/radiation",
);

//getWeather("san francisco");

//day 1: rain, day 2: rain, day 3: cloudy day, day 4: cloudy day, day 5: rain, day 6: rain, day 7: rain

// Example: Weather Info for San Francisco
/*
Object
address: "san francisco"
alerts: []
currentConditions: {datetime: '07:30:00', datetimeEpoch: 1770651000, temp: 51, feelslike: 51, humidity: 22.5, …}
days: (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
description: "Similar temperatures continuing with a chance of rain multiple days."
latitude: 37.7558
longitude: -122.4449
queryCost: 1
resolvedAddress: "san francisco"
stations: {KHAF: {…}, KSFO: {…}, KCCR: {…}, F6803: {…}, KHWD: {…}, …}
timezone: "America/Los_Angeles"
tzoffset: -8
[[Prototype]]: Object
*/
/*
currentConditions: 
    cloudcover: 25
    conditions: "Partially cloudy"
    datetime: "07:30:00"
    datetimeEpoch: 1770651000
    dew: 13.9
    feelslike: 51
    humidity: 22.5
    icon: "partly-cloudy-day"
    moonphase: 0.75
    precip: 0
    precipprob: 0
    preciptype: null
    pressure: 1024
    snow: 0
    snowdepth: 0
    solarenergy: 0.3
    solarradiation: 80
    source: "obs"
    stations: (4) ['KSFO', 'F6803', 'F2543', 'C5988']
    sunrise: "07:05:57"
    sunriseEpoch: 1770649557
    sunset: "17:42:38"
    sunsetEpoch: 1770687758
    temp: 51
    uvindex: 1
    visibility: 9.9
    winddi: 14
    windgust: 4
    windspeed: 2.3
    [[Prototype]]: Object
*/
/*
days: Array(15)
    0: {datetime: '2026-02-09', datetimeEpoch: 1770624000, tempmax: 63.1, tempmin: 50, temp: 56.3, …}
    1: {datetime: '2026-02-10', datetimeEpoch: 1770710400, tempmax: 60, tempmin: 49.9, temp: 54.3, …}
    2: {datetime: '2026-02-11', datetimeEpoch: 1770796800, tempmax: 58, tempmin: 49.9, temp: 53.4, …}
    3: {datetime: '2026-02-12', datetimeEpoch: 1770883200, tempmax: 58.4, tempmin: 49.2, temp: 53.2, …}
    4: {datetime: '2026-02-13', datetimeEpoch: 1770969600, tempmax: 59.3, tempmin: 48.5, temp: 53.1, …}
    5: {datetime: '2026-02-14', datetimeEpoch: 1771056000, tempmax: 58.6, tempmin: 48.8, temp: 53, …}
    6: {datetime: '2026-02-15', datetimeEpoch: 1771142400, tempmax: 55.1, tempmin: 48.5, temp: 50.9, …}
    7: {datetime: '2026-02-16', datetimeEpoch: 1771228800, tempmax: 54.4, tempmin: 46.5, temp: 49.5, …}
    8: {datetime: '2026-02-17', datetimeEpoch: 1771315200, tempmax: 52.2, tempmin: 48.6, temp: 50.7, …}
    9: {datetime: '2026-02-18', datetimeEpoch: 1771401600, tempmax: 52.2, tempmin: 45.6, temp: 50.2, …}
    10: {datetime: '2026-02-19', datetimeEpoch: 1771488000, tempmax: 54.2, tempmin: 49.9, temp: 51.9, …}
    11: {datetime: '2026-02-20', datetimeEpoch: 1771574400, tempmax: 54.9, tempmin: 49.5, temp: 52.2, …}
    12: {datetime: '2026-02-21', datetimeEpoch: 1771660800, tempmax: 60.2, tempmin: 49.7, temp: 54.6, …}
    13: {datetime: '2026-02-22', datetimeEpoch: 1771747200, tempmax: 56.9, tempmin: 54.9, temp: 56, …}
    14: {datetime: '2026-02-23', datetimeEpoch: 1771833600, tempmax: 58.6, tempmin: 53.3, temp: 55.7, …}
    length: 15
    [[Prototype]]: Array(0)
*/

// Day 0 info:
/*
0: 
    cloudcover: 70.6
    conditions: "Partially cloudy"
    datetime: "2026-02-09"
    datetimeEpoch: 1770624000
    description: "Partly cloudy throughout the day."
    dew: 47.4
    feelslike: 56.3
    feelslikemax: 63.1
    feelslikemin: 50
    hours: (24) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    humidity: 73.4
    icon: "partly-cloudy-day"
    moonphase: 0.75
    precip: 0
    precipcover: 0
    precipprob: 3
    preciptype: null
    pressure: 1019.8
    severerisk: 10
    snow: 0
    snowdepth: 0
    solarenergy: 11.1
    solarradiation: 127.5
    source: "comb"
    stations: (6) ['KHAF', 'KSFO', 'KCCR', 'F6803', 'KHWD', 'KOAK']
    sunrise: "07:05:57"
    sunriseEpoch: 1770649557
    sunset: "17:42:38"
    sunsetEpoch: 1770687758
    temp: 56.3
    tempmax: 63.1
    tempmin: 50
    uvindex: 5
    visibility: 10
    winddir: 352.2
    windgust: 16.1
    windspeed: 10.2
    [[Prototype]]: Object
*/

/*
hours: Array(24)
    0: {datetime: '00:00:00', datetimeEpoch: 1770624000, temp: 55.2, feelslike: 55.2, humidity: 93.52, …}
    1: {datetime: '01:00:00', datetimeEpoch: 1770627600, temp: 54.4, feelslike: 54.4, humidity: 92.27, …}
    2: {datetime: '02:00:00', datetimeEpoch: 1770631200, temp: 53.3, feelslike: 53.3, humidity: 91.78, …}
    3: {datetime: '03:00:00', datetimeEpoch: 1770634800, temp: 53.4, feelslike: 53.4, humidity: 85.4, …}
    4: {datetime: '04:00:00', datetimeEpoch: 1770638400, temp: 51.5, feelslike: 51.5, humidity: 87.52, …}
    5: {datetime: '05:00:00', datetimeEpoch: 1770642000, temp: 50, feelslike: 50, humidity: 89.37, …}
    6: {datetime: '06:00:00', datetimeEpoch: 1770645600, temp: 52.2, feelslike: 52.2, humidity: 82.06, …}
    7: {datetime: '07:00:00', datetimeEpoch: 1770649200, temp: 51.5, feelslike: 51.5, humidity: 84.63, …}
    8: {datetime: '08:00:00', datetimeEpoch: 1770652800, temp: 51, feelslike: 51, humidity: 89.23, …}
    9: {datetime: '09:00:00', datetimeEpoch: 1770656400, temp: 54.1, feelslike: 54.1, humidity: 83.02, …}
    10: {datetime: '10:00:00', datetimeEpoch: 1770660000, temp: 56.9, feelslike: 56.9, humidity: 77.33, …}
    11: {datetime: '11:00:00', datetimeEpoch: 1770663600, temp: 58.9, feelslike: 58.9, humidity: 66.89, …}
    12: {datetime: '12:00:00', datetimeEpoch: 1770667200, temp: 61.1, feelslike: 61.1, humidity: 59.88, …}
    13: {datetime: '13:00:00', datetimeEpoch: 1770670800, temp: 63.1, feelslike: 63.1, humidity: 55.84, …}
    14: {datetime: '14:00:00', datetimeEpoch: 1770674400, temp: 63.1, feelslike: 63.1, humidity: 55.84, …}
    15: {datetime: '15:00:00', datetimeEpoch: 1770678000, temp: 63.1, feelslike: 63.1, humidity: 55.84, …}
    16: {datetime: '16:00:00', datetimeEpoch: 1770681600, temp: 63.1, feelslike: 63.1, humidity: 55.84, …}
    17: {datetime: '17:00:00', datetimeEpoch: 1770685200, temp: 60, feelslike: 60, humidity: 57.73, …}
    18: {datetime: '18:00:00', datetimeEpoch: 1770688800, temp: 58.9, feelslike: 58.9, humidity: 60, …}
    19: {datetime: '19:00:00', datetimeEpoch: 1770692400, temp: 56.9, feelslike: 56.9, humidity: 61.83, …}
    20: {datetime: '20:00:00', datetimeEpoch: 1770696000, temp: 56, feelslike: 56, humidity: 66.55, …}
    21: {datetime: '21:00:00', datetimeEpoch: 1770699600, temp: 54.9, feelslike: 54.9, humidity: 69.21, …}
    22: {datetime: '22:00:00', datetimeEpoch: 1770703200, temp: 54.9, feelslike: 54.9, humidity: 69.21, …}
    23: {datetime: '23:00:00', datetimeEpoch: 1770706800, temp: 54.1, feelslike: 54.1, humidity: 71.52, …}
    length: 24
    [[Prototype]]: Array(0)
*/

/*
hours: Array(24)
    0: 
        cloudcover: 72.4
        conditions: "Partially cloudy"
        datetime: "00:00:00"
        datetimeEpoch: 1770624000
        dew: 53.4
        feelslike: 55.2
        humidity: 93.52
        icon: "partly-cloudy-night"
        precip: 0
        precipprob: 0
        preciptype: null
        pressure: 1025.8
        severerisk: 10
        snow: 0
        snowdepth: 0
        solarenergy: 0
        solarradiation: 0
        source: "obs"
        stations: (6) ['KHAF', 'KSFO', 'KCCR', 'F6803', 'KHWD', 'KOAK']
        temp: 55.2
        uvindex: 0
        visibility: 9.5
        winddir: 291
        windgust: 11.4
        windspeed: 10.2
        [[Prototype]]: Object
*/
