import './scss/index.scss'
import elementFactory from './elementFactory'
import getWeather from './getWeather'
// import CloudyImg from './images/cloudy.jpg';

const body = document.querySelector('body')
body.className = 'default';

const content = document.querySelector('#content')

const container = elementFactory('div', 'container')

const h1 = elementFactory('h1', 'title-text')

h1.innerHTML = 'Enter the Name of Your City and Click the Button!'

container.appendChild(h1)

const search = elementFactory('input', 'form-control form-control-lg', 'search-field')
search.type = 'text'
search.placeholder = 'City Name'

container.appendChild(search)

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
    let city = document.getElementById('search-field').value 
    if (city) {
      getWeather(city).then(data => {
        if (data.name) {
        
        temperature.innerHTML = `Temperature: ${data.main.temp}`
        cityName.innerHTML = data.name
        weather.innerHTML = data.weather[0].description
        // Changing Backgrounds according to Weather
          const condition = data.weather[0].main
          console.log(condition)
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

  
