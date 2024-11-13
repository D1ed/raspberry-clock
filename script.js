//хочу добавить display другой страницы с прогнозом погоды на следующие дни

let body = document.querySelector('body');
let pogoda = document.querySelector('.pogoda');
let daily = document.querySelector('.daily');

body.onclick = function() {
  //pogoda.classList.toggle('hidden');
  daily.classList.toggle('hidden');
};


//часы

  let timerId;

    function update() {
      let clock = document.getElementById('clock');
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      clock.children[0].innerHTML = hours;

      let minutes = date.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;
      clock.children[1].innerHTML = minutes;

      let seconds = date.getSeconds();
      if (seconds < 10) seconds = '0' + seconds;
      clock.children[2].innerHTML = seconds;

      //let data_now = document.getElementById('data_now');
      //data_now.innerHTML =  date.getMonth();

      // let superdata = document.getElementById('YYYYMMDD');
      // let year = date.getYear()+1900;
      // let month = date.getMonth()+1;
      // let day = date.getDate();
      // superdata.innerHTML = year + ' ' + month + ' ' + day;

    }

    function clockStart() {
      timerId = setInterval(update, 1000);
      update(); // <--  начать тут же, не ждать 1 секунду пока setInterval сработает
    }

    function clockStop() {
      clearInterval(timerId);
    }

    clockStart();


//api погоды openweathermap





/* старый виджет опервеавер, они удалили прогнозы, сделали платными, поэтому заметил
function weatherBallon() {
  fetch('https://api.openweathermap.org/data/2.5/weather?id=565778&appid=a061c5cf224dc563e73ce50c27c99bd4')  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
  })

  .catch(function() {
    // catch any errors
  });

}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
  var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  var description = d.weather[0].description; 
  var icon = d.weather[0].icon;
  
  document.querySelector('.pogoda_container_description').innerHTML = description;
  document.querySelector('.pogoda_container-1_temp').innerHTML = celcius + '&deg;';
  document.querySelector('.now_temp').innerHTML = celcius + '&deg;';
  document.querySelector('.pogoda_container-1_location').innerHTML = d.name;
  document.querySelector('.pogoda_container_icon').src = 'icons/' + icon + '.png';
  
}


*/


function weatherBallonDaily() {
  fetch('http://api.weatherapi.com/v1/forecast.json?key=1f43449fc0804e9aa56182711242910&q=58.462971,56.399948&days=3&lang=ru')  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeatherDaily(data);
  })

  .catch(function() {
    // catch any errors
  });

}


function convertTimestamp(timestamp) {
var d = new Date(timestamp * 1000), // Конвертируем метку в миллисекунды
yyyy = d.getFullYear(), // Конвертируем метку в год
mm = ('0' + (d.getMonth() + 1)).slice(-2), // Конвертируем метку в месяц
dd = ('0' + d.getDate()).slice(-2), // Конвертируем метку в число месяца
hh = d.getHours(), // Конвертируем метку в часы
h = hh,
min = ('0' + d.getMinutes()).slice(-2), // Конвертируем метку в минуты
time;

var month=mm;
var arr=[
   'Января',
   'Февраля',
   'Марта',
   'Апреля',
   'Мая',
   'Июня',
   'Июля',
   'Августа',
   'Сентября',
   'Октября',
   'Ноября',
   'Декабря',
];
time = dd + ' ' + arr[month-1]; // Шаблон вывода: год-месяц-день, часы-минуты
return time;
}







function drawWeatherDaily( dnew ) {

  let uni_date_first = dnew.forecast.forecastday[0].date_epoch;
  document.querySelector('.daily_after-tomorrow_where').innerHTML = convertTimestamp(uni_date_first);
  let uni_date_two = dnew.forecast.forecastday[1].date_epoch;
  document.querySelector('.daily_after-tomorrow-two_where').innerHTML = convertTimestamp(uni_date_two);
  let uni_date_three = dnew.forecast.forecastday[2].date_epoch;
  document.querySelector('.daily_after-tomorrow-three_where').innerHTML = convertTimestamp(uni_date_three);
  /*let uni_date_four = dnew.forecast.forecastday[3].date_epoch;
  document.querySelector('.daily_after-tomorrow-four_where').innerHTML = convertTimestamp(uni_date_four);
  let uni_date_five = dnew.forecast.forecastday[4].date_epoch;
  document.querySelector('.daily_after-tomorrow-five_where').innerHTML = convertTimestamp(uni_date_five);
  let uni_date_six = dnew.forecast.forecastday[5].date_epoch;
  document.querySelector('.daily_after-tomorrow-six_where').innerHTML = convertTimestamp(uni_date_six);
  */

  var celciusnow_day_now = dnew.current.temp_c;
  var now_icon = dnew.current.condition.icon;
  document.querySelector('.now_temp').innerHTML = celciusnow_day_now + '&deg;';
  document.querySelector('.now_icon').src = 'http:' + now_icon;

  var celciusnow_day_tomorrow = dnew.forecast.forecastday[0].day.maxtemp_c;
  var celciusnow_night_tomorrow = dnew.forecast.forecastday[0].day.mintemp_c;
  var description_tomorrow = dnew.forecast.forecastday[0].day.condition.text;
  var icon_tomorrow = dnew.forecast.forecastday[0].day.condition.icon;
  document.querySelector('.daily_description-tomorrow').innerHTML = description_tomorrow;
  document.querySelector('.daily_day-tomorrow').innerHTML = 'Днём: ' + celciusnow_day_tomorrow + '&deg;';
  document.querySelector('.daily_night-tomorrow').innerHTML = 'Ночью: ' + celciusnow_night_tomorrow + '&deg;';
  document.querySelector('.daily_icon-tomorrow').src = 'http:' + icon_tomorrow;

  var celciusnow_day_after_tomorrow = dnew.forecast.forecastday[1].day.maxtemp_c;
  var celciusnow_night_after_tomorrow = dnew.forecast.forecastday[1].day.mintemp_c;
  var description_after_tomorrow = dnew.forecast.forecastday[1].day.condition.text;
  var icon_after_tomorrow = dnew.forecast.forecastday[1].day.condition.icon;
  document.querySelector('.daily_description-after-tomorrow').innerHTML = description_after_tomorrow;
  document.querySelector('.daily_day-after-tomorrow').innerHTML = 'Днём: ' + celciusnow_day_after_tomorrow + '&deg;';
  document.querySelector('.daily_night-after-tomorrow').innerHTML = 'Ночью: ' + celciusnow_night_after_tomorrow + '&deg;';
  document.querySelector('.daily_icon-after-tomorrow').src = 'http:' + icon_after_tomorrow;
  
  var celciusnow_day_after_tomorrow_two = dnew.forecast.forecastday[2].day.maxtemp_c;
  var celciusnow_night_after_tomorrow_two = dnew.forecast.forecastday[2].day.mintemp_c;
  var description_after_tomorrow_two = dnew.forecast.forecastday[2].day.condition.text;
  var icon_after_tomorrow_two = dnew.forecast.forecastday[2].day.condition.icon;
  document.querySelector('.daily_description-after-tomorrow-two').innerHTML = description_after_tomorrow_two;
  document.querySelector('.daily_day-after-tomorrow-two').innerHTML = 'Днём: ' + celciusnow_day_after_tomorrow_two + '&deg;';
  document.querySelector('.daily_night-after-tomorrow-two').innerHTML = 'Ночью: ' + celciusnow_night_after_tomorrow_two + '&deg;';
  document.querySelector('.daily_icon-after-tomorrow-two').src = 'http:' + icon_after_tomorrow_two;

  /*var celciusnow_day_after_tomorrow_three = dnew.forecast.forecastday[3].day.maxtemp_c;
  var celciusnow_night_after_tomorrow_three = dnew.forecast.forecastday[3].day.mintemp_c;
  var description_after_tomorrow_three = dnew.forecast.forecastday[3].day.condition.text;
  var icon_after_tomorrow_three = dnew.forecast.forecastday[3].day.condition.icon;
  document.querySelector('.daily_description-after-tomorrow-three').innerHTML = description_after_tomorrow_three;
  document.querySelector('.daily_day-after-tomorrow-three').innerHTML = 'Днём: ' + celciusnow_day_after_tomorrow_three + '&deg;';
  document.querySelector('.daily_night-after-tomorrow-three').innerHTML = 'Ночью: ' + celciusnow_night_after_tomorrow_three + '&deg;';
  document.querySelector('.daily_icon-after-tomorrow-three').src = 'http:' + icon_after_tomorrow_three;

  var celciusnow_day_after_tomorrow_four = dnew.forecast.forecastday[4].day.maxtemp_c;
  var celciusnow_night_after_tomorrow_four = dnew.forecast.forecastday[4].day.mintemp_c;
  var description_after_tomorrow_four = dnew.forecast.forecastday[4].day.condition.text;
  var icon_after_tomorrow_four = dnew.forecast.forecastday[4].day.condition.icon;
  document.querySelector('.daily_description-after-tomorrow-four').innerHTML = description_after_tomorrow_four;
  document.querySelector('.daily_day-after-tomorrow-four').innerHTML = 'Днём: ' + celciusnow_day_after_tomorrow_four + '&deg;';
  document.querySelector('.daily_night-after-tomorrow-four').innerHTML = 'Ночью: ' + celciusnow_night_after_tomorrow_four + '&deg;';
  document.querySelector('.daily_icon-after-tomorrow-four').src = 'http:' + icon_after_tomorrow_four;

  var celciusnow_day_after_tomorrow_five = dnew.forecast.forecastday[5].day.maxtemp_c;
  var celciusnow_night_after_tomorrow_five = dnew.forecast.forecastday[5].day.mintemp_c;
  var description_after_tomorrow_five = dnew.forecast.forecastday[5].day.condition.text;
  var icon_after_tomorrow_five = dnew.forecast.forecastday[5].day.condition.icon;
  document.querySelector('.daily_description-after-tomorrow-five').innerHTML = description_after_tomorrow_five;
  document.querySelector('.daily_day-after-tomorrow-five').innerHTML = 'Днём: ' + celciusnow_day_after_tomorrow_five + '&deg;';
  document.querySelector('.daily_night-after-tomorrow-five').innerHTML = 'Ночью: ' + celciusnow_night_after_tomorrow_five + '&deg;';
  document.querySelector('.daily_icon-after-tomorrow-five').src = 'http:' + icon_after_tomorrow_five;

  var celciusnow_day_after_tomorrow_six = dnew.forecast.forecastday[6].day.maxtemp_c;
  var celciusnow_night_after_tomorrow_six = dnew.forecast.forecastday[6].day.mintemp_c;
  var description_after_tomorrow_six = dnew.forecast.forecastday[6].day.condition.text;
  var icon_after_tomorrow_six = dnew.forecast.forecastday[6].day.condition.icon;
  document.querySelector('.daily_description-after-tomorrow-six').innerHTML = description_after_tomorrow_six;
  document.querySelector('.daily_day-after-tomorrow-six').innerHTML = 'Днём: ' + celciusnow_day_after_tomorrow_six + '&deg;';
  document.querySelector('.daily_night-after-tomorrow-six').innerHTML = 'Ночью: ' + celciusnow_night_after_tomorrow_six + '&deg;';
  document.querySelector('.daily_icon-after-tomorrow-six').src = 'http:' + icon_after_tomorrow_six;
  */
}



weatherBallonDaily();

setInterval(weatherBallonDaily, 500000);





