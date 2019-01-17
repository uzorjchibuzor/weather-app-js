

const getWeather = (city = null) => {

  const API_KEY = '046416d2c240a04a5f144a25c28da9d0'

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  
  

  const data = fetch(url, {mode: 'cors'})
  
  .then(response => {
    return response.json();
  })
   console.log(url);
   return data;
}

export default getWeather