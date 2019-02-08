

const getWeather = (city = null, unit) => {

  const API_KEY = '046416d2c240a04a5f144a25c28da9d0'

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
  
  

  const data = fetch(url, {mode: 'cors'})
  
  .then(response => {
    return response.json();
  })
   return data;
}

export default getWeather