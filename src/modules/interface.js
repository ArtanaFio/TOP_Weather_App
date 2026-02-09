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

export function displayCurrentStats(container, icon) {
  const currentConditionsSection = makeElement(
    "div",
    "",
    "section left-side",
    "",
    container,
  );
  const leftPanel = makeElement(
    "div",
    "",
    "panel",
    "",
    currentConditionsSection,
  );
  const middlePanel = makeElement(
    "div",
    "",
    "panel",
    "",
    currentConditionsSection,
  );
  const rightPanel = makeElement("div", "", "right-side", "", container);

  const conditionsContainer = makeElement(
    "div",
    "cond-C",
    "container larger-container",
    "",
    leftPanel,
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
  const conditionsText = makeElement("p", "", "condt", "", condTextBox);
  const cloudCoverText = makeElement("p", "", "", "Cloud Cover: ", condTextBox);
  const cloudCover = makeElement("span", "", "bold", "", cloudCoverText);
  const cloudCoverUnit = makeElement("span", "", "bold", "%", cloudCoverText);

  const tempContainer = makeElement(
    "div",
    "temp-C",
    "container small-container",
    "",
    leftPanel,
  );
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

  const precipitationContainer = makeElement(
    "div",
    "precip-C",
    "container small-container",
    "",
    leftPanel,
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
    "container medium-container",
    "",
    middlePanel,
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
  const dewPointText = makeElement("p", "", "", `Dew point: `, humidityBox);
  const dewPoint = makeElement("span", "", "bold", "", dewPointText);
  const dewPointUnit = makeElement("span", "", "bold", "\u00B0", dewPointText);

  const windContainer = makeElement(
    "div",
    "wind-C",
    "container medium-container",
    "",
    middlePanel,
  );
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
    "Wind Direction: ",
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
  const windGustText = makeElement("p", "", "", "Wind Gust: ", windBox);
  const windGust = makeElement("span", "", "bold", "", windGustText);
  const windGustUnit = makeElement("span", "", "bold", " mph", windGustText);
  const uvContainer = makeElement(
    "div",
    "uv-C",
    "container medium container",
    "",
    middlePanel,
  );
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
  const visibilityText = makeElement("p", "", "", "Visibility: ", uvBox);
  const visibility = makeElement("span", "", "bold", "", visibilityText);
  const visibilityUnit = makeElement(
    "span",
    "",
    "bold",
    " miles",
    visibilityText,
  );
  const timeContainer = makeElement(
    "div",
    "week-C",
    "container",
    "",
    rightPanel,
  );
  const timeTop = makeElement("div", "time-top", "", "", timeContainer);
  const timeTitle = makeElement(
    "p",
    "time-title",
    "heading",
    "Hourly Forecast",
    timeTop,
  );
  const toggleButton = makeElement(
    "button",
    "hour-week",
    "",
    "Weekly",
    timeTop,
  );
  const timeBox = makeElement("div", "", "box entire-week", "", timeContainer);

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

  return {
    currentConditionsSection: currentConditionsSection,
    rightPanel: rightPanel,
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
    timeBox: timeBox,
  };
}

export function hourlyForecast(timeBox) {
  const rowOne = makeElement("div", "", "row", "", timeBox);
  const timeOne = makeElement("div", "", "hour-day", "", rowOne);
  const weatherOne = makeElement("img", "", "small-icon", "", rowOne);
  const tempOneBox = makeElement("p", "", "", "", rowOne);
  const tempOne = makeElement("span", "", "range", "", tempOneBox);
  const tempOneDegree = makeElement("span", "", "", `\u00B0`, tempOneBox);
  const tempOneUnit = makeElement("span", "", "", "", tempOneBox);
  const rowTwo = makeElement("div", "", "row", "", timeBox);
  const timeTwo = makeElement("div", "", "hour-day", "", rowTwo);
  const weatherTwo = makeElement("img", "", "small-icon", "", rowTwo);
  const tempTwoBox = makeElement("p", "", "", "", rowTwo);
  const tempTwo = makeElement("span", "", "range", "", tempTwoBox);
  const tempTwoDegree = makeElement("span", "", "", `\u00B0`, tempTwoBox);
  const tempTwoUnit = makeElement("span", "", "", "", tempTwoBox);

  const rowThree = makeElement("div", "", "row", "", timeBox);
  const timeThree = makeElement("div", "", "hour-day", "", rowThree);
  const weatherThree = makeElement("img", "", "small-icon", "", rowThree);
  const tempThreeBox = makeElement("p", "", "", "", rowThree);
  const tempThree = makeElement("span", "", "range", "", tempThreeBox);
  const tempThreeDegree = makeElement("span", "", "", `\u00B0`, tempThreeBox);
  const tempThreeUnit = makeElement("span", "", "", "", tempThreeBox);
  const rowFour = makeElement("div", "", "row", "", timeBox);
  const timeFour = makeElement("div", "", "hour-day", "", rowFour);
  const weatherFour = makeElement("img", "", "small-icon", "", rowFour);
  const tempFourBox = makeElement("p", "", "", "", rowFour);
  const tempFour = makeElement("span", "", "range", "", tempFourBox);
  const tempFourDegree = makeElement("span", "", "", `\u00B0`, tempFourBox);
  const tempFourUnit = makeElement("span", "", "", "", tempFourBox);
  const rowFive = makeElement("div", "", "row", "", timeBox);
  const timeFive = makeElement("div", "", "hour-day", "", rowFive);
  const weatherFive = makeElement("img", "", "small-icon", "", rowFive);
  const tempFiveBox = makeElement("p", "", "", "", rowFive);
  const tempFive = makeElement("span", "", "range", "", tempFiveBox);
  const tempFiveDegree = makeElement("span", "", "", `\u00B0`, tempFiveBox);
  const tempFiveUnit = makeElement("span", "", "", "", tempFiveBox);
  const rowSix = makeElement("div", "", "row", "", timeBox);
  const timeSix = makeElement("div", "", "hour-day", "", rowSix);
  const weatherSix = makeElement("img", "", "small-icon", "", rowSix);
  const tempSixBox = makeElement("p", "", "", "", rowSix);
  const tempSix = makeElement("span", "", "range", "", tempSixBox);
  const tempSixDegree = makeElement("span", "", "", `\u00B0`, tempSixBox);
  const tempSixUnit = makeElement("span", "", "", "", tempSixBox);
  const rowSeven = makeElement("div", "", "row", "", timeBox);
  const timeSeven = makeElement("div", "", "hour-day", "", rowSeven);
  const weatherSeven = makeElement("img", "", "small-icon", "", rowSeven);
  const tempSevenBox = makeElement("p", "", "", "", rowSeven);
  const tempSeven = makeElement("span", "", "range", "", tempSevenBox);
  const tempSevenDegree = makeElement("span", "", "", `\u00B0`, tempSevenBox);
  const tempSevenUnit = makeElement("span", "", "", "", tempSevenBox);

  timeOne.textContent = "8 AM";
  timeTwo.textContent = "9 AM";
  timeThree.textContent = "10 AM";
  timeFour.textContent = "11 AM";
  timeFive.textContent = "12 PM";
  timeSix.textContent = "1 PM";
  timeSeven.textContent = "2 PM";
  tempOne.textContent = "51";
  tempTwo.textContent = "54.1";
  tempThree.textContent = "56.9";
  tempFour.textContent = "58.9";
  tempFive.textContent = "61.1";
  tempSix.textContent = "63.1";
  tempSeven.textContent = "63.1";
  tempOneUnit.textContent = "F";
  tempTwoUnit.textContent = "F";
  tempThreeUnit.textContent = "F";
  tempFourUnit.textContent = "F";
  tempFiveUnit.textContent = "F";
  tempSixUnit.textContent = "F";
  tempSevenUnit.textContent = "F";

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
    tempOne: tempOne,
    tempTwo: tempTwo,
    tempThree: tempThree,
    tempFour: tempFour,
    tempFive: tempFive,
    tempSix: tempSix,
    tempSeven: tempSeven,
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
