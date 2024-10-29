//хочу добавить display другой страницы с прогнозом погоды на следующие дни

let body = document.querySelector('body');
let pogoda = document.querySelector('.pogoda');
let daily = document.querySelector('.daily');

body.onclick = function() {
  pogoda.classList.toggle('hidden');
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




setInterval(weatherBallon, 400000);
setInterval(drawWeather, 400000);
  	const key = '';
if(key=='') document.querySelector('.pogoda_container-1_temp').innerHTML = ('');

function weatherBallon( cityID ) {
	fetch('https://api.openweathermap.org/data/3.0/weather?id=' + '565778'+ '&appid=162204f36d92f27a55b386010cb2ccf1')  
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


setInterval(weatherBallonDaily, 4000000);
setInterval(drawWeatherDaily, 4000000);


function weatherBallonDaily() {
  fetch('https://api.openweathermap.org/data/3.0/onecall?lat=58.462970&lon=56.399950&exclude=hourly,minutely' + '&appid=162204f36d92f27a55b386010cb2ccf1')  
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

  let uni_date_first = dnew.daily[2].dt;
  document.querySelector('.daily_after-tomorrow_where').innerHTML = convertTimestamp(uni_date_first);
  let uni_date_two = dnew.daily[3].dt;
  document.querySelector('.daily_after-tomorrow-two_where').innerHTML = convertTimestamp(uni_date_two);
  let uni_date_three = dnew.daily[4].dt;
  document.querySelector('.daily_after-tomorrow-three_where').innerHTML = convertTimestamp(uni_date_three);
  let uni_date_four = dnew.daily[5].dt;
  document.querySelector('.daily_after-tomorrow-four_where').innerHTML = convertTimestamp(uni_date_four);
  let uni_date_five = dnew.daily[6].dt;
  document.querySelector('.daily_after-tomorrow-five_where').innerHTML = convertTimestamp(uni_date_five);
  let uni_date_six = dnew.daily[7].dt;
  document.querySelector('.daily_after-tomorrow-six_where').innerHTML = convertTimestamp(uni_date_six);


  var celciusnow_day_now = Math.round(parseFloat(dnew.daily[0].temp.day)-273.15);
  var celciusnow_night_now = Math.round(parseFloat(dnew.daily[0].temp.night)-273.15);
  var description_now = dnew.daily[0].weather[0].description; 
  var icon_now = dnew.daily[0].weather[0].icon;
  document.querySelector('.daily_description-now').innerHTML = description_now;
  document.querySelector('.daily_day-now').innerHTML = 'Днём: ' + celciusnow_day_now + '&deg;';
  document.querySelector('.daily_night-now').innerHTML = 'Ночью: ' + celciusnow_night_now + '&deg;';
  document.querySelector('.daily_icon-now').src = 'icons/' + icon_now + '.png';

  var celciusnow_day_tomorrow = Math.round(parseFloat(dnew.daily[1].temp.day)-273.15);
  var celciusnow_night_tomorrow = Math.round(parseFloat(dnew.daily[1].temp.night)-273.15);
  var description_tomorrow = dnew.daily[1].weather[0].description; 
  var icon_tomorrow = dnew.daily[1].weather[0].icon;
  document.querySelector('.daily_description-tomorrow').innerHTML = description_tomorrow;
  document.querySelector('.daily_day-tomorrow').innerHTML = 'Днём: ' + celciusnow_day_tomorrow + '&deg;';
  document.querySelector('.daily_night-tomorrow').innerHTML = 'Ночью: ' + celciusnow_night_tomorrow + '&deg;';
  document.querySelector('.daily_icon-tomorrow').src = 'icons/' + icon_tomorrow + '.png';

  var celciusnow_day_after_tomorrow = Math.round(parseFloat(dnew.daily[2].temp.day)-273.15);
  var celciusnow_night_after_tomorrow = Math.round(parseFloat(dnew.daily[2].temp.night)-273.15);
  var description_after_tomorrow = dnew.daily[2].weather[0].description; 
  var icon_after_tomorrow = dnew.daily[2].weather[0].icon;
  document.querySelector('.daily_description-after-tomorrow').innerHTML = description_after_tomorrow;
  document.querySelector('.daily_day-after-tomorrow').innerHTML = 'Днём: ' + celciusnow_day_after_tomorrow + '&deg;';
  document.querySelector('.daily_night-after-tomorrow').innerHTML = 'Ночью: ' + celciusnow_night_after_tomorrow + '&deg;';
  document.querySelector('.daily_icon-after-tomorrow').src = 'icons/' + icon_after_tomorrow + '.png';
  
  var celciusnow_day_after_tomorrow_two = Math.round(parseFloat(dnew.daily[3].temp.day)-273.15);
  var celciusnow_night_after_tomorrow_two = Math.round(parseFloat(dnew.daily[3].temp.night)-273.15);
  var description_after_tomorrow_two = dnew.daily[3].weather[0].description; 
  var icon_after_tomorrow_two = dnew.daily[3].weather[0].icon;
  document.querySelector('.daily_description-after-tomorrow-two').innerHTML = description_after_tomorrow_two;
  document.querySelector('.daily_day-after-tomorrow-two').innerHTML = 'Днём: ' + celciusnow_day_after_tomorrow_two + '&deg;';
  document.querySelector('.daily_night-after-tomorrow-two').innerHTML = 'Ночью: ' + celciusnow_night_after_tomorrow_two + '&deg;';
  document.querySelector('.daily_icon-after-tomorrow-two').src = 'icons/' + icon_after_tomorrow_two + '.png';

  var celciusnow_day_after_tomorrow_three = Math.round(parseFloat(dnew.daily[4].temp.day)-273.15);
  var celciusnow_night_after_tomorrow_three = Math.round(parseFloat(dnew.daily[4].temp.night)-273.15);
  var description_after_tomorrow_three = dnew.daily[4].weather[0].description; 
  var icon_after_tomorrow_three = dnew.daily[4].weather[0].icon;
  document.querySelector('.daily_description-after-tomorrow-three').innerHTML = description_after_tomorrow_three;
  document.querySelector('.daily_day-after-tomorrow-three').innerHTML = 'Днём: ' + celciusnow_day_after_tomorrow_three + '&deg;';
  document.querySelector('.daily_night-after-tomorrow-three').innerHTML = 'Ночью: ' + celciusnow_night_after_tomorrow_three + '&deg;';
  document.querySelector('.daily_icon-after-tomorrow-three').src = 'icons/' + icon_after_tomorrow_three + '.png';

  var celciusnow_day_after_tomorrow_four = Math.round(parseFloat(dnew.daily[5].temp.day)-273.15);
  var celciusnow_night_after_tomorrow_four = Math.round(parseFloat(dnew.daily[5].temp.night)-273.15);
  var description_after_tomorrow_four = dnew.daily[5].weather[0].description; 
  var icon_after_tomorrow_four = dnew.daily[5].weather[0].icon;
  document.querySelector('.daily_description-after-tomorrow-four').innerHTML = description_after_tomorrow_four;
  document.querySelector('.daily_day-after-tomorrow-four').innerHTML = 'Днём: ' + celciusnow_day_after_tomorrow_four + '&deg;';
  document.querySelector('.daily_night-after-tomorrow-four').innerHTML = 'Ночью: ' + celciusnow_night_after_tomorrow_four + '&deg;';
  document.querySelector('.daily_icon-after-tomorrow-four').src = 'icons/' + icon_after_tomorrow_four + '.png';

  var celciusnow_day_after_tomorrow_five = Math.round(parseFloat(dnew.daily[6].temp.day)-273.15);
  var celciusnow_night_after_tomorrow_five = Math.round(parseFloat(dnew.daily[6].temp.night)-273.15);
  var description_after_tomorrow_five = dnew.daily[6].weather[0].description; 
  var icon_after_tomorrow_five = dnew.daily[6].weather[0].icon;
  document.querySelector('.daily_description-after-tomorrow-five').innerHTML = description_after_tomorrow_five;
  document.querySelector('.daily_day-after-tomorrow-five').innerHTML = 'Днём: ' + celciusnow_day_after_tomorrow_five + '&deg;';
  document.querySelector('.daily_night-after-tomorrow-five').innerHTML = 'Ночью: ' + celciusnow_night_after_tomorrow_five + '&deg;';
  document.querySelector('.daily_icon-after-tomorrow-five').src = 'icons/' + icon_after_tomorrow_five + '.png';

  var celciusnow_day_after_tomorrow_six = Math.round(parseFloat(dnew.daily[7].temp.day)-273.15);
  var celciusnow_night_after_tomorrow_six = Math.round(parseFloat(dnew.daily[7].temp.night)-273.15);
  var description_after_tomorrow_six = dnew.daily[7].weather[0].description; 
  var icon_after_tomorrow_six = dnew.daily[7].weather[0].icon;
  document.querySelector('.daily_description-after-tomorrow-six').innerHTML = description_after_tomorrow_six;
  document.querySelector('.daily_day-after-tomorrow-six').innerHTML = 'Днём: ' + celciusnow_day_after_tomorrow_six + '&deg;';
  document.querySelector('.daily_night-after-tomorrow-six').innerHTML = 'Ночью: ' + celciusnow_night_after_tomorrow_six + '&deg;';
  document.querySelector('.daily_icon-after-tomorrow-six').src = 'icons/' + icon_after_tomorrow_six + '.png';
}

window.onload = function() {
  weatherBallon( 565778 );
  weatherBallonDaily();
}






