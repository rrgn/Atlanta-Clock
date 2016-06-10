getWeather();
function startTime() {
    var today = new Date();
    var h = today.getHours() % 12;
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);

}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
    return i;
}

function getWeather() {
          var weather= "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d";
          $.ajax({
            url: weather,
            dataType: "json",
            success: function(data) {

        $("#temp").text(data.main.temp);
        $("#humidity1").text(data.main.humidity);
        $("#pressure1").text(data.main.pressure);
        $("#pressure1").text(data.main.temp_max);
        $("#tempMax").text(data.main.temp_max);
        $("#tempMin").text(data.main.temp_min);
        $("#clouds").text(data.clouds.all);
      

         }
    });
 }
