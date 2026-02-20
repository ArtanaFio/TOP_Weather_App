export function defaultBackground() {
  document.body.classList.add("default");
}

export function basicLayout() {
  const pageTitle = makeElement(
    "h1",
    "page-title",
    "",
    "TOP Weather App",
    document.body,
  );

  const contentBox = makeElement("div", "content-box", "", "", document.body);
  const higherLevelInfoBox = makeElement("div", "", "", "", contentBox);
  const weatherContainer = makeElement(
    "div",
    "weather-container",
    "",
    "",
    contentBox,
  );
  const footer = makeElement("footer", "", "", "", document.body);
  const createdByText = makeElement(
    "span",
    "",
    "footer-text",
    "Create by ",
    footer,
  );
  const nameText = makeElement("span", "", "name-text", "ArtanaFio", footer);
  const onText = makeElement("span", "", "footer-text", " on ", footer);
  const githubLink = makeElement("a", "", "footer-link", "GitHub", footer);
  githubLink.href = "https://github.com/ArtanaFio/";
  githubLink.target = "_blank";
  const copyright = makeElement("span", "", "footer-text", " \u00A9", footer);
  const copyrightYear = makeElement(
    "span",
    "",
    "footer-text",
    ` ${new Date().getFullYear()}`,
    footer,
  );
  copyrightYear.className = "year";

  return {
    higherLevelInfoBox: higherLevelInfoBox,
    weatherContainer: weatherContainer,
  };
}

export function createLocationForm(contentBox) {
  const form = makeElement("form", "", "", "", contentBox);
  const fieldset = makeElement("fieldset", "", "", "", form);
  const legend = makeElement("legend", "", "", "", fieldset);
  const label = document.createElement("label");
  label.for = "search";
  label.textContent = "Search for a location's forecast:";
  fieldset.appendChild(label);
  const searchBox = document.createElement("input");
  searchBox.id = "search";
  searchBox.type = "text";
  searchBox.name = "serch";
  searchBox.placeholder = "Location";
  fieldset.appendChild(searchBox);
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Search";
  fieldset.appendChild(button);

  return {
    searchBox: searchBox,
    searchButton: button,
  };
}

export function displayLocationInformation(container) {
  const infoBox = makeElement("div", "info-box", "grid", "", container);
  const datetimeBox = makeElement("div", "date-time-box", "", "", infoBox);
  const date = makeElement("p", "date", "bold", "", datetimeBox);
  const timeBox = makeElement("p", "time-box", "", "", datetimeBox);
  const timeText = makeElement(
    "span",
    "time-text",
    "bold",
    "Forecast time: ",
    timeBox,
  );
  const time = makeElement("span", "time", "", "", timeBox);
  const sunriseBox = makeElement("p", "sunrise-box", "", "", infoBox);
  const sunriseText = makeElement("span", "", "bold", "Sunrise:", sunriseBox);
  const sunriseTime = makeElement("span", "", "space", "", sunriseBox);
  const sunsetBox = makeElement("p", "sunset-box", "", "", infoBox);
  const sunsetText = makeElement("span", "", "bold", "Sunset:", sunsetBox);
  const sunsetTime = makeElement("span", "", "space", "", sunsetBox);
  const centerColumn = makeElement("div", "center-column", "", "", infoBox);
  const location = makeElement("p", "location", "", "", centerColumn);
  const currentDescription = makeElement(
    "p",
    "description",
    "",
    "",
    centerColumn,
  );

  date.textContent = "February 9, 2026";
  time.textContent = "7:30 AM";
  sunriseTime.textContent = "7:05 AM";
  sunsetTime.textContent = "5:42 PM";
  location.textContent = "San Francisco";
  currentDescription.textContent =
    "Similar temperatures continuing with a chance of rain multiple days.";
  return {
    infoBox: infoBox,
    date: date,
    time: time,
    sunriseTime: sunriseTime,
    sunsetTime: sunsetTime,
    location: location,
    currentDescription: currentDescription,
  };
}

export function displayCurrentStats(container, icon, staticIcon, moon) {
  const leftSide = makeElement("div", "", "left-side", "", container);
  //const leftPanel = makeElement("div", "", "panel", "", leftSide);
  //const middlePanel = makeElement("div", "", "panel", "", leftSide);
  //const rightPanel = makeElement("div", "", "panel", "", leftSide);
  const tempContainer = makeElement("div", "temp-C", "container", "", leftSide);
  const temptitle = makeElement(
    "p",
    "",
    "heading",
    "Temperatures",
    tempContainer,
  );
  const tempBox = makeElement(
    "div",
    "temp-box",
    "box uniform",
    "",
    tempContainer,
  );
  const tempRow1 = makeElement("div", "", "row-1 center", "", tempBox);
  const currentTempText = makeElement("p", "", "main", "", tempRow1);
  const currentTemp = makeElement("span", "", "bold", "", currentTempText);
  const currentTempUnit = makeElement(
    "span",
    "",
    "bold",
    ` \u00B0F`,
    currentTempText,
  );
  const feelsLike = makeElement("p", "", "italic", "", tempRow1);
  const feelsLikeText = makeElement("span", "", "", "(feels like ", feelsLike);
  const feelsLikeTemp = makeElement("span", "", "bold", "", feelsLike);
  const feelsLikeDegree = makeElement("span", "", "bold", `\u00B0F`, feelsLike);
  const lastbracket = makeElement("span", "", "", ")", feelsLike);
  const tempRow2 = makeElement("div", "", "row-2", "", tempBox);
  const minBox = makeElement("div", "", "min-box", "", tempRow2);
  const minText = makeElement("p", "", "", "Min", minBox);
  const minTempText = makeElement("p", "", "min-temp temp", "", minBox);
  const minTemp = makeElement("span", "", "bold", "", minTempText);
  const minTempUnit = makeElement("span", "", "bold", `\u00B0F`, minTempText);
  const feelsLikeMinText = makeElement("p", "", "italic", "", minBox);
  const minLeftBracket = makeElement("span", "", "", "(", feelsLikeMinText);
  const feelsLikeMin = makeElement("span", "", "bold", "", feelsLikeMinText);
  const feelsLikeMinUnit = makeElement(
    "span",
    "",
    "bold",
    "\u00B0F",
    feelsLikeMinText,
  );
  const minRightBracket = makeElement("span", "", "", ")", feelsLikeMinText);
  const maxBox = makeElement("div", "", "max-box", "", tempRow2);
  const maxText = makeElement("p", "", "", "Max", maxBox);
  const maxTempText = makeElement("p", "", "max-temp temp", "", maxBox);
  const maxTemp = makeElement("span", "", "bold", "", maxTempText);
  const maxTempUnit = makeElement("span", "", "bold", `\u00B0F`, maxTempText);
  const feelsLikeMaxText = makeElement("p", "", "italic", "", maxBox);
  const maxLeftBracket = makeElement("span", "", "", "(", feelsLikeMaxText);
  const feelsLikeMax = makeElement("span", "", "bold", "", feelsLikeMaxText);
  const feelsLikeMaxUnit = makeElement(
    "span",
    "",
    "bold",
    "\u00B0F",
    feelsLikeMaxText,
  );
  const maxRightBracket = makeElement("span", "", "", ")", feelsLikeMaxText);

  const solarContainer = makeElement(
    "div",
    "solar-C",
    "container",
    "",
    leftSide,
  );
  const solarTitle = makeElement(
    "p",
    "",
    "heading",
    "Solar Energy",
    solarContainer,
  );
  const solarBox = makeElement("div", "", "box uniform", "", solarContainer);
  const solarEnergyText = makeElement("p", "", "", "", solarBox);
  const solarEnergy = makeElement("span", "", "bold main", "", solarEnergyText);
  const solarEnergyUnit = makeElement(
    "span",
    "",
    "bold main",
    " MJ/m",
    solarEnergyText,
  );
  const solarEnergySuperscript = makeElement(
    "sup",
    "",
    "bold main",
    "2",
    solarEnergyText,
  );
  const radiationBox = makeElement("div", "", "el-box", "", solarBox);
  const solarRadiationText = makeElement(
    "p",
    "",
    "",
    "Solar Radiation",
    radiationBox,
  );
  const solRad = makeElement("p", "", "", "", radiationBox);
  const solarRadiation = makeElement("span", "", "bold", "", solRad);
  const solarRadiationUnit = makeElement("span", "", "bold", " W/m", solRad);
  const solarRadiationSuperscript = makeElement("sup", "", "bold", "2", solRad);

  const moonContainer = makeElement("div", "moon-C", "container", "", leftSide);
  const moonTitle = makeElement("p", "", "heading", "Moonphase", moonContainer);
  const moonBox = makeElement("div", "", "box uniform", "", moonContainer);
  const moonIcon = makeElement("img", "", "static moon", "", moonBox);
  const moonphase = makeElement("p", "", "bold center", "", moonBox);
  // -------------------------------------------------------------------------------
  const precipitationContainer = makeElement(
    "div",
    "precip-C",
    "container",
    "",
    leftSide,
  );
  const precipitationTitle = makeElement(
    "p",
    "",
    "heading",
    "Precipitation",
    precipitationContainer,
  );
  const precipitationBox = makeElement(
    "div",
    "",
    "box uniform",
    "",
    precipitationContainer,
  );
  const precipitationText = makeElement(
    "p",
    "",
    "main center",
    "",
    precipitationBox,
  );
  const precipitation = makeElement("span", "", "bold", "", precipitationText);
  const precipitationUnit = makeElement(
    "span",
    "",
    "bold",
    '"',
    precipitationText,
  );
  const precipitationTypeText = makeElement(
    "p",
    "",
    "",
    "Type: ",
    precipitationBox,
  );
  const precipitationType = makeElement(
    "span",
    "",
    "bold",
    "",
    precipitationTypeText,
  );
  const preciptationProbabilityText = makeElement(
    "p",
    "",
    "",
    "Probability: ",
    precipitationBox,
  );
  const precipitationProbability = makeElement(
    "span",
    "",
    "bold",
    "",
    preciptationProbabilityText,
  );
  const precipitationProbabilityUnit = makeElement(
    "span",
    "",
    "bold",
    "%",
    preciptationProbabilityText,
  );

  const humidityContainer = makeElement(
    "div",
    "hum-C",
    "container",
    "",
    leftSide,
  );
  const humidityTitle = makeElement(
    "p",
    "",
    "heading",
    "Humidity",
    humidityContainer,
  );
  const humidityBox = makeElement(
    "div",
    "",
    "box uniform",
    "",
    humidityContainer,
  );
  const humidityText = makeElement("p", "", "main center", "", humidityBox);
  const humidity = makeElement("span", "", "bold", "", humidityText);
  const humidityUnit = makeElement("span", "", "bold", "%", humidityText);
  const dewBox = makeElement("div", "", "el-box", "", humidityBox);
  const dewPointText = makeElement("p", "", "", "Dew point", dewBox);
  const dp = makeElement("p", "", "bold", "", dewBox);
  const dewPoint = makeElement("span", "", "bold", "", dp);
  const dewPointUnit = makeElement("span", "", "bold", "\u00B0", dp);

  const uvContainer = makeElement("div", "uv-C", "container", "", leftSide);
  const uvTitle = makeElement(
    "p",
    "",
    "heading",
    "UV Index & Visibility",
    uvContainer,
  );
  const uvBox = makeElement("div", "", "box uniform", "", uvContainer);
  const uvIndex = makeElement("p", "", "main center bold", "", uvBox);
  const uvText = makeElement("p", "", "", "", uvBox);
  const visibilityBox = makeElement("div", "", "el-box", "", uvBox);
  const visibilityText = makeElement("p", "", "", "Visibility", visibilityBox);
  const vis = makeElement("p", "", "bold", "", visibilityBox);
  const visibility = makeElement("span", "", "", "", vis);
  const visibilityUnit = makeElement("span", "", "", " miles", vis);
  // -------------------------------------------------------------------------------

  const windContainer = makeElement("div", "wind-C", "container", "", leftSide);
  const windTitle = makeElement(
    "p",
    "",
    "heading",
    "Wind Speed",
    windContainer,
  );
  const windBox = makeElement("div", "", "box uniform", "", windContainer);
  const windspeedText = makeElement("p", "", "main center", "", windBox);
  const windspeed = makeElement("span", "", "bold", "", windspeedText);
  const windspeedUnit = makeElement(
    "span",
    "",
    "bold space",
    "mph",
    windspeedText,
  );
  const windDirectionText = makeElement(
    "p",
    "",
    "",
    "Wind Direction ",
    windBox,
  );
  const windDirectionSpot = makeElement("p", "", "", "", windBox);
  const windDirection = makeElement("span", "", "bold", "", windDirectionSpot);
  const windDirectionUnit = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    windDirectionSpot,
  );
  const gustBox = makeElement("div", "", "el-box", "", windBox);
  const windGustText = makeElement("p", "", "", "Wind Gust", gustBox);
  const wg = makeElement("p", "", "bold", "", gustBox);
  const windGust = makeElement("span", "", "", "", wg);
  const windGustUnit = makeElement("span", "", "", " mph", wg);

  const pressureContainer = makeElement(
    "div",
    "press-C",
    "container",
    "",
    leftSide,
  );
  const pressureTitle = makeElement(
    "p",
    "",
    "heading",
    "Pressure",
    pressureContainer,
  );
  const pressureBox = makeElement(
    "div",
    "",
    "box uniform",
    "",
    pressureContainer,
  );
  const pressureText = makeElement(
    "p",
    "pressure-text",
    "main",
    "",
    pressureBox,
  );
  const pressure = makeElement("span", "", "bold", "", pressureText);
  const pressureUnit = makeElement("span", "", "bold", " mb", pressureText);

  // --------------------------------------------------------------------------

  const mainSection = makeElement("div", "", "section", "", container);

  const conditionsContainer = makeElement(
    "div",
    "cond-C",
    "container larger-container",
    "",
    mainSection,
  );
  const conditionsTitle = makeElement(
    "p",
    "",
    "heading",
    "Conditions",
    conditionsContainer,
  );
  const conditionsBox = makeElement(
    "div",
    "",
    "box uniform",
    "",
    conditionsContainer,
  );
  const conditionsIcon = makeElement("img", "", "animated", "", conditionsBox);
  const condTextBox = makeElement("div", "", "text-box", "", conditionsBox);
  const conditionsText = makeElement("p", "", "condt main", "", condTextBox);
  const cloudCoverText = makeElement(
    "p",
    "",
    "center",
    "Cloud Cover: ",
    condTextBox,
  );
  const cloudCover = makeElement("span", "", "bold", "", cloudCoverText);
  const cloudCoverUnit = makeElement("span", "", "bold", "%", cloudCoverText);

  const hourlyContainer = makeElement(
    "div",
    "hour-C",
    "container",
    "",
    mainSection,
  );
  const hourlyTitle = makeElement(
    "p",
    "",
    "heading",
    "Hourly Forecast",
    hourlyContainer,
  );
  const hourlyBox = makeElement(
    "div",
    "",
    "long-box uniform",
    "",
    hourlyContainer,
  );

  // -----------------------------------------------------------------------------

  const rightSide = makeElement("div", "", "right-side", "", container);

  const weeklyContainer = makeElement(
    "div",
    "week-C",
    "container",
    "",
    rightSide,
  );
  const weeklyTitle = makeElement(
    "p",
    "",
    "heading",
    "Weekly Forecast",
    weeklyContainer,
  );
  const weeklyBox = makeElement(
    "div",
    "",
    "box entire-week",
    "",
    weeklyContainer,
  );

  conditionsIcon.src = icon;
  conditionsText.textContent = "Partially cloudy";
  cloudCover.textContent = "25";
  currentTemp.textContent = "51";
  feelsLikeTemp.textContent = "51";
  minTemp.textContent = "50";
  maxTemp.textContent = "63.1";
  feelsLikeMin.textContent = "50";
  feelsLikeMax.textContent = "63.1";
  precipitation.textContent = "0";
  precipitationType.textContent = "none";
  precipitationProbability.textContent = "0";
  humidity.textContent = "22.5";
  dewPoint.textContent = "13.9";
  windspeed.textContent = "2.3";
  windDirection.textContent = "14";
  windGust.textContent = "4";
  uvIndex.textContent = "1";
  uvText.textContent = "Low";
  visibility.textContent = "9.9";
  moonIcon.src = moon;
  moonphase.textContent = "First Quarter Moon";
  pressure.textContent = "1024";
  solarEnergy.textContent = "0.3";
  solarRadiation.textContent = "80";

  return {
    leftSide: leftSide,
    mainSection: mainSection,
    rightSide: rightSide,
    conditionsIcon: conditionsIcon,
    conditionsText: conditionsText,
    cloudCover: cloudCover,
    currentTemp: currentTemp,
    feelsLikeTemp: feelsLikeTemp,
    minTemp: minTemp,
    maxTemp: maxTemp,
    feelsLikeMin: feelsLikeMin,
    feelsLikeMax: feelsLikeMax,
    precipitation: precipitation,
    precipitationType: precipitationType,
    precipitationProbability: precipitationProbability,
    humidity: humidity,
    dewPoint: dewPoint,
    windspeed: windspeed,
    windDirection: windDirection,
    windGust: windGust,
    uvIndex: uvIndex,
    uvText: uvText,
    visibility: visibility,
    moonIcon: moonIcon,
    moonphase: moonphase,
    pressure: pressure,
    solarEnergy: solarEnergy,
    solarRadiation: solarRadiation,
    hourlyBox: hourlyBox,
    weeklyBox: weeklyBox,
  };
}

export function hourlyForecast(hourlyBox, staticIcon) {
  const columnOne = makeElement("div", "", "column", "", hourlyBox);
  const hourOne = makeElement("p", "", "hour", "", columnOne);
  const weathOne = makeElement(
    "img",
    "",
    "hourly-weather static",
    "",
    columnOne,
  );
  const tempOneText = makeElement("p", "", "bold", "", columnOne);
  const hourlyTempOne = makeElement("span", "", "", "", tempOneText);
  const tempDegreeOne = makeElement("span", "", "", "\u00B0", tempOneText);
  const tempUnitOne = makeElement("span", "", "", "", tempOneText);

  const columnTwo = makeElement("div", "", "column", "", hourlyBox);
  const hourTwo = makeElement("p", "", "hour", "", columnTwo);
  const weathTwo = makeElement(
    "img",
    "",
    "hourly-weather static",
    "",
    columnTwo,
  );
  const tempTwoText = makeElement("p", "", "bold", "", columnTwo);
  const hourlyTempTwo = makeElement("span", "", "", "", tempTwoText);
  const tempDegreeTwo = makeElement("span", "", "", "\u00B0", tempTwoText);
  const tempUnitTwo = makeElement("span", "", "", "", tempTwoText);

  const columnThree = makeElement("div", "", "column", "", hourlyBox);
  const hourThree = makeElement("p", "", "hour", "", columnThree);
  const weathThree = makeElement(
    "img",
    "",
    "hourly-weather static",
    "",
    columnThree,
  );
  const tempThreeText = makeElement("p", "", "bold", "", columnThree);
  const hourlyTempThree = makeElement("span", "", "", "", tempThreeText);
  const tempDegreeThree = makeElement("span", "", "", "\u00B0", tempThreeText);
  const tempUnitThree = makeElement("span", "", "", "", tempThreeText);

  const columnFour = makeElement("div", "", "column", "", hourlyBox);
  const hourFour = makeElement("div", "", "hour", "", columnFour);
  const weathFour = makeElement(
    "img",
    "",
    "hourly-weather static",
    "",
    columnFour,
  );
  const tempFourText = makeElement("p", "", "bold", "", columnFour);
  const hourlyTempFour = makeElement("span", "", "", "", tempFourText);
  const tempDegreeFour = makeElement("span", "", "", "\u00B0", tempFourText);
  const tempUnitFour = makeElement("span", "", "", "", tempFourText);

  const columnFive = makeElement("div", "", "column", "", hourlyBox);
  const hourFive = makeElement("p", "", "hour", "", columnFive);
  const weathFive = makeElement(
    "img",
    "",
    "hourly-weather static",
    "",
    columnFive,
  );
  const tempFiveText = makeElement("p", "", "bold", "", columnFive);
  const hourlyTempFive = makeElement("span", "", "", "", tempFiveText);
  const tempDegreeFive = makeElement("span", "", "", "\u00B0", tempFiveText);
  const tempUnitFive = makeElement("span", "", "", "", tempFiveText);

  hourOne.textContent = "8 AM";
  hourTwo.textContent = "9 AM";
  hourThree.textContent = "10 AM";
  hourFour.textContent = "11 AM";
  hourFive.textContent = "12 PM";
  weathOne.src = staticIcon;
  weathTwo.src = staticIcon;
  weathThree.src = staticIcon;
  weathFour.src = staticIcon;
  weathFive.src = staticIcon;
  hourlyTempOne.textContent = "51";
  hourlyTempTwo.textContent = "54.1";
  hourlyTempThree.textContent = "56.9";
  hourlyTempFour.textContent = "58.9";
  hourlyTempFive.textContent = "61.1";
  tempUnitOne.textContent = "F";
  tempUnitTwo.textContent = "F";
  tempUnitThree.textContent = "F";
  tempUnitFour.textContent = "F";
  tempUnitFive.textContent = "F";

  return {
    hourOne: hourOne,
    hourTwo: hourTwo,
    hourThree: hourThree,
    hourFour: hourFour,
    hourFive: hourFive,
    weathOne: weathOne,
    weathTwo: weathTwo,
    weathThree: weathThree,
    weathFour: weathFour,
    weathFive: weathFive,
    hourlyTempOne: hourlyTempOne,
    hourlyThepTwo: hourlyTempTwo,
    hourlyTempThree: hourlyTempThree,
    hourlyTempFour: hourlyTempFour,
    hourlyTempFive: hourlyTempFive,
    tempUnitOne: tempUnitOne,
    tempUnitTwo: tempUnitTwo,
    tempUnitThree: tempUnitThree,
    tempUnitFour: tempUnitFour,
    tempUnitFive: tempUnitFive,
  };
}

export function weeklyForecast(timeBox, icon, icon2) {
  const rowOne = makeElement("div", "", "row", "", timeBox);
  const timeOne = makeElement("div", "", "hour-day", "", rowOne);
  const weatherOne = makeElement("img", "", "static", "", rowOne);
  const tempOneBox = makeElement("p", "", "range", "", rowOne);
  const lowOne = makeElement("span", "", "", "L: ", tempOneBox);
  const minTempOne = makeElement("span", "", "bold", "", tempOneBox);
  const minTempOneDegree = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    tempOneBox,
  );
  const minTempOneUnit = makeElement("span", "", "bold", "", tempOneBox);
  const dividerOne = makeElement("span", "", "", " | ", tempOneBox);
  const highOne = makeElement("span", "", "", "H: ", tempOneBox);
  const maxTempOne = makeElement("span", "", "bold", "", tempOneBox);
  const maxTempOneDegree = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    tempOneBox,
  );
  const maxTempOneUnit = makeElement("span", "", "bold", "", tempOneBox);

  const rowTwo = makeElement("div", "", "row", "", timeBox);
  const timeTwo = makeElement("div", "", "hour-day", "", rowTwo);
  const weatherTwo = makeElement("img", "", "static", "", rowTwo);
  const tempTwoBox = makeElement("p", "", "range", "", rowTwo);
  const lowTwo = makeElement("span", "", "", "L: ", tempTwoBox);
  const minTempTwo = makeElement("span", "", "bold", "", tempTwoBox);
  const tempTwoDegree = makeElement("span", "", "bold", `\u00B0`, tempTwoBox);
  const minTempTwoUnit = makeElement("span", "", "bold", "", tempTwoBox);
  const divideTwo = makeElement("span", "", "", " | ", tempTwoBox);
  const highTwo = makeElement("span", "", "", "H: ", tempTwoBox);
  const maxTempTwo = makeElement("span", "", "bold", "", tempTwoBox);
  const maxTempTwoDegree = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    tempTwoBox,
  );
  const maxTempTwoUnit = makeElement("span", "", "bold", "", tempTwoBox);

  const rowThree = makeElement("div", "", "row", "", timeBox);
  const timeThree = makeElement("div", "", "hour-day", "", rowThree);
  const weatherThree = makeElement("img", "", "static", "", rowThree);
  const tempThreeBox = makeElement("p", "", "range", "", rowThree);
  const lowThree = makeElement("span", "", "", "L: ", tempThreeBox);
  const minTempThree = makeElement("span", "", "bold", "", tempThreeBox);
  const minTempThreeDegree = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    tempThreeBox,
  );
  const minTempThreeUnit = makeElement("span", "", "bold", "", tempThreeBox);
  const divideThree = makeElement("span", "", "", " | ", tempThreeBox);
  const highThree = makeElement("span", "", "", "H: ", tempThreeBox);
  const maxTempThree = makeElement("span", "", "bold", "", tempThreeBox);
  const maxTempThreeDegree = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    tempThreeBox,
  );
  const maxTempThreeUnit = makeElement("span", "", "bold", "", tempThreeBox);

  const rowFour = makeElement("div", "", "row", "", timeBox);
  const timeFour = makeElement("div", "", "hour-day", "", rowFour);
  const weatherFour = makeElement("img", "", "static", "", rowFour);
  const tempFourBox = makeElement("p", "", "range", "", rowFour);
  const lowFour = makeElement("span", "", "", "L: ", tempFourBox);
  const minTempFour = makeElement("span", "", "bold", "", tempFourBox);
  const minTempFourDegree = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    tempFourBox,
  );
  const minTempFourUnit = makeElement("span", "", "bold", "", tempFourBox);
  const divideFour = makeElement("span", "", "", " | ", tempFourBox);
  const highFour = makeElement("span", "", "", "H: ", tempFourBox);
  const maxTempFour = makeElement("span", "", "bold", "", tempFourBox);
  const maxTempFourDegree = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    tempFourBox,
  );
  const maxTempFourUnit = makeElement("span", "", "bold", "", tempFourBox);

  const rowFive = makeElement("div", "", "row", "", timeBox);
  const timeFive = makeElement("div", "", "hour-day", "", rowFive);
  const weatherFive = makeElement("img", "", "static", "", rowFive);
  const tempFiveBox = makeElement("p", "", "range", "", rowFive);
  const lowFive = makeElement("span", "", "", "L: ", tempFiveBox);
  const minTempFive = makeElement("span", "", "bold", "", tempFiveBox);
  const minTempFiveDegree = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    tempFiveBox,
  );
  const minTempFiveUnit = makeElement("span", "", "bold", "", tempFiveBox);
  const divideFive = makeElement("span", "", "", " | ", tempFiveBox);
  const highFive = makeElement("span", "", "", "H: ", tempFiveBox);
  const maxTempFive = makeElement("span", "", "bold", "", tempFiveBox);
  const maxTempFiveDegree = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    tempFiveBox,
  );
  const maxTempFiveUnit = makeElement("span", "", "bold", "", tempFiveBox);

  const rowSix = makeElement("div", "", "row", "", timeBox);
  const timeSix = makeElement("div", "", "hour-day", "", rowSix);
  const weatherSix = makeElement("img", "", "static", "", rowSix);
  const tempSixBox = makeElement("p", "", "range", "", rowSix);
  const lowSix = makeElement("span", "", "", "L: ", tempSixBox);
  const minTempSix = makeElement("span", "", "bold", "", tempSixBox);
  const minTempSixDegree = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    tempSixBox,
  );
  const minTempSixUnit = makeElement("span", "", "bold", "", tempSixBox);
  const divideSix = makeElement("span", "", "", " | ", tempSixBox);
  const highSix = makeElement("span", "", "", "H: ", tempSixBox);
  const maxTempSix = makeElement("span", "", "bold", "", tempSixBox);
  const maxTempSixDegree = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    tempSixBox,
  );
  const maxTempSixUnit = makeElement("span", "", "bold", "", tempSixBox);

  const rowSeven = makeElement("div", "", "row", "", timeBox);
  const timeSeven = makeElement("div", "", "hour-day", "", rowSeven);
  const weatherSeven = makeElement("img", "", "static", "", rowSeven);
  const tempSevenBox = makeElement("p", "", "range", "", rowSeven);
  const lowSeven = makeElement("span", "", "", "L: ", tempSevenBox);
  const minTempSeven = makeElement("span", "", "bold", "", tempSevenBox);
  const minTempSevenDegree = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    tempSevenBox,
  );
  const minTempSevenUnit = makeElement("span", "", "bold", "", tempSevenBox);
  const divideSeven = makeElement("span", "", "", " | ", tempSevenBox);
  const highSeven = makeElement("span", "", "", "H: ", tempSevenBox);
  const maxTempSeven = makeElement("span", "", "bold", "", tempSevenBox);
  const maxTempSevenDegree = makeElement(
    "span",
    "",
    "bold",
    `\u00B0`,
    tempSevenBox,
  );
  const maxTempSevenUnit = makeElement("span", "", "bold", "", tempSevenBox);

  weatherOne.src = icon2;
  weatherTwo.src = icon2;
  weatherThree.src = icon;
  weatherFour.src = icon;
  weatherFive.src = icon2;
  weatherSix.src = icon2;
  weatherSeven.src = icon2;
  timeOne.textContent = "Feb 10";
  timeTwo.textContent = "Feb 11";
  timeThree.textContent = "Feb 12";
  timeFour.textContent = "Feb 13";
  timeFive.textContent = "Feb 14";
  timeSix.textContent = "Feb 15";
  timeSeven.textContent = "Feb 16";

  minTempOne.textContent = "49.9";
  minTempTwo.textContent = "49.9";
  minTempThree.textContent = "49.2";
  minTempFour.textContent = "48.5";
  minTempFive.textContent = "48.8";
  minTempSix.textContent = "48.5";
  minTempSeven.textContent = "46.5";

  minTempOneUnit.textContent = "F";
  minTempTwoUnit.textContent = "F";
  minTempThreeUnit.textContent = "F";
  minTempFourUnit.textContent = "F";
  minTempFiveUnit.textContent = "F";
  minTempSixUnit.textContent = "F";
  minTempSevenUnit.textContent = "F";

  maxTempOne.textContent = "60";
  maxTempTwo.textContent = "58";
  maxTempThree.textContent = "58.4";
  maxTempFour.textContent = "59.3";
  maxTempFive.textContent = "58.6";
  maxTempSix.textContent = "55.1";
  maxTempSeven.textContent = "54.4";

  maxTempOneUnit.textContent = "F";
  maxTempTwoUnit.textContent = "F";
  maxTempThreeUnit.textContent = "F";
  maxTempFourUnit.textContent = "F";
  maxTempFiveUnit.textContent = "F";
  maxTempSixUnit.textContent = "F";
  maxTempSevenUnit.textContent = "F";

  return {
    timeOne: timeOne,
    timeTwo: timeTwo,
    timeThree: timeThree,
    timeFour: timeFour,
    timeFive: timeFive,
    timeSix: timeSix,
    timeSeven: timeSeven,
    weatherOne: weatherOne,
    weatherTwo: weatherTwo,
    weatherThree: weatherThree,
    weatherFour: weatherFour,
    weatherFive: weatherFive,
    weatherSix: weatherSix,
    weatherSeven: weatherSeven,
    minTempOne: minTempOne,
    minTempTwo: minTempTwo,
    minTempThree: minTempThree,
    minTempFour: minTempFour,
    minTempFive: minTempFive,
    minTempSix: minTempSix,
    minTempSeven: minTempSeven,
    maxTempOne: maxTempOne,
    maxTempTwo: maxTempTwo,
    maxTempThree: maxTempThree,
    maxTempFour: maxTempFour,
    maxTempFive: maxTempFive,
    maxTempSix: maxTempSix,
    maxTempSeven: maxTempSeven,
    minTempOneUnit: minTempOneUnit,
    minTempTwoUnit: minTempTwoUnit,
    minTempThreeUnit: minTempThreeUnit,
    minTempFourUnit: minTempFourUnit,
    minTempFiveUnit: minTempFiveUnit,
    minTempSixUnit: minTempSixUnit,
    minTempSevenUnit: minTempSevenUnit,
    maxTempOneUnit: maxTempOneUnit,
    maxTempTwoUnit: maxTempTwoUnit,
    maxTempThreeUnit: maxTempThreeUnit,
    maxTempFourUnit: maxTempFourUnit,
    maxTempFiveUnit: maxTempFiveUnit,
    maxTempSixUnit: maxTempSixUnit,
    maxTempSevenUnit: maxTempSevenUnit,
  };
}

export function tempRange(low, high, unit) {
  return `Low: ${low}\u00B0${unit} | High: ${high}\u00B0${unit}`;
}

function makeElement(element, elementId, classes, text, parent) {
  const genElement = document.createElement(element);

  if (elementId) {
    genElement.id = elementId;
  }

  if (classes) {
    genElement.classList.add(...classes.split(" "));
  }

  if (text) {
    genElement.textContent = text;
  }

  if (parent) {
    parent.appendChild(genElement);
  }

  return genElement;
}

function makeLabel(id, forLabel, classes, text, parent) {
  const genLabel = document.createElement("label");

  if (id) {
    genLabel.id = id;
  }

  if (forLabel) {
    genLabel.for = forLabel;
  }

  if (classes) {
    genLabel.classList.add(...classes.split(" "));
  }

  if (text) {
    genLabel.textContent = text;
  }

  if (parent) {
    parent.appendChild(genLabel);
  }

  return genLabel;
}
