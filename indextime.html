<!DOCTYPE HTML>
<html>
<head>
  <style>
#clock {
    color: white;
    font-size: 200px;
    width: 778px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    text-shadow: 0.1em 0.1em 0 rgb(0 0 0 / 30%);
    }
.sec {
font-size: 100px;
}
body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #fff;
    display: flex;
    align-items: center;
    
    text-shadow: .1em .1em 0 rgba(0,0,0,0.3);
    font-size: 1.3em;
    height: 90vh;
    background-image: linear-gradient(to right top, black, black, black, black, black);
}
h1 {
    margin: 0 auto;
    font-size: 2.2em;
    text-align: center;
    color: #fff;
    font-size: 150px;
    font-weight: 400;
}
#description {
  text-align: center;
  font-size: 30px
}
#location {
  text-align: center;
}
#pogoda1 {
  width: 200px;
}

  </style>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
      <meta charset="utf-8">
   <link href="https://fonts.googleapis.com/css?family=Montserrat:400,900" rel="stylesheet"> 
</head>

<body>

  <div id="clock">
    <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
  </div>

  <div id="pogoda">
        	<div id="pogoda1">
            <div id="description"></div>
            <img id="icon" src="" style="width: 100%;">
          </div>
          <div id="pogoda2">
              <h1 id="temp"></h1>
              <div id="location"></div>
          </div>
  </div>

  <script>
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
  </script>


  <script>
setInterval(weatherBallon, 120000);
setInterval(drawWeather, 120000);
  	const key = '';
if(key=='') document.getElementById('temp').innerHTML = ('');

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
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
  document.getElementById('icon').src = 'icons/' + icon + '.png';

}
window.onload = function() {
	weatherBallon( 565778 );
}

</script>
</body>
</html>