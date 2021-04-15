//хочу добавить display другой страницы с прогнозом погоды на следующие дни

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




setInterval(weatherBallon, 120000);
setInterval(drawWeather, 120000);
  	const key = '';
if(key=='') document.querySelector('.pogoda_container-1_temp').innerHTML = ('');

function weatherBallon( cityID ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + '565778'+ '&appid=162204f36d92f27a55b386010cb2ccf1')  
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
	document.querySelector('.pogoda_container-1_location').innerHTML = d.name;
  document.querySelector('.pogoda_container_icon').src = 'icons/' + icon + '.png';
  
}
window.onload = function() {
	weatherBallon( 565778 );
}
