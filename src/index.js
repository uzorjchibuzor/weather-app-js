import './scss/index.scss'
import elementFactory from './elementFactory'
import getWeather from './getWeather'
import titleCase from './titleCase'

const body = document.querySelector('body')
body.className = 'default';

const content = document.querySelector('#content')

const container = elementFactory('div', 'container')



const search = elementFactory('input', 'form-control form-control-lg', 'search-field')
search.type = 'text'
search.placeholder = 'City Name'

container.appendChild(search)

const select = elementFactory('select', 'form-control', 'temp-select')

let tempOptions = ['Celsius', 'Fahrenheit']

tempOptions.forEach(opt => {
  let option = elementFactory('option')
  option.innerHTML = opt
  select.appendChild(option) 
})

container.appendChild(select)

const searchButton = elementFactory('button', 'btn btn-info', 'search-button')
searchButton.innerHTML = 'Search'
container.appendChild(searchButton)

const details = elementFactory('div', 'details-class', 'details-id')

const temperature = elementFactory('p', 'temp-class', 'temp-id')

const cityName = elementFactory('h3', 'city-class', 'city-id')

const weather = elementFactory('p', 'weather-class', 'weather-id')

details.appendChild(temperature)
details.appendChild(weather)
details.appendChild(cityName)


container.appendChild(details);

content.appendChild(container)

// Button Event Listener



  document.getElementById('search-button').addEventListener('click', () => {
    let city = document.getElementById('search-field')
    let unit
    if (select.value === 'Celsius') {
      unit = 'metric'
    } else {
      unit = 'imperial'
    }
    if (city.value) {
      getWeather(city.value, unit).then(data => {
        if (data.name) {
          temperature.innerHTML = `Temperature: ${data.main.temp} degree ${select.value}`
          cityName.innerHTML = data.name
          weather.innerHTML = `Weather: ${titleCase(data.weather[0].description)}`
          city.value = '' // clears the input field
        // Changing Backgrounds according to Weather
          const condition = data.weather[0].main
          if (condition === 'Clouds') {
            body.className = 'cloudy'
          } else if (condition === 'Clear') {
            body.className = 'clear'
          } else if (condition === 'Rain') {
            body.className = 'rain'
          } else {
            body.className = 'default'
          }
        } else {
          temperature.innerHTML = ''
          weather.innerHTML = ''
          cityName.innerHTML = 'Sorry, City Not Found!'
        }
      })
    } else {
      alert('Please enter a Valid City Name!')
    }
      
    })

  
