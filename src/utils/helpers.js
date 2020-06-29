var daysMap = {
    "0":"dimanche",
    "1":"Lundi",
    "2":"Mardi",
    "3":"Mercredi",
    "4":"Jeudi",
    "5":"vendredi",
    "6":"Samedi"
  };
  
  var monthsMap = {
    "0":"Jan",
    "1":"Feb",
    "2":"Mar",
    "3":"Apr",
    "4":"May",
    "5":"June",
    "6":"July",
    "7":"Aug",
    "8":"Sept",
    "9":"Oct",
    "10":"Nov",
    "11":"Dec"
  };
  
 
  
  function getDate (unixTimestmap) {
    var date = new Date(unixTimestmap * 1000);
    var day = daysMap[date.getDay()]
    var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
    return day + ', ' + month;
  }


   const WeatherTimeParser = (rawData) => {
    const date = new Date(rawData * 1000);
    let hour = date.getHours().toString();
    let minutes = date.getMinutes().toString();
  
    if(hour.length == 1) hour = '0' + hour;
    if(minutes.length == 1) minutes = '0' + minutes;
  
    return hour + ':' + minutes;
  };
  
  module.exports = {
    getDate: getDate,
    WeatherTimeParser
  }