const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');
const weatherDisplay = document.getElementById('weatherDisplay');

weatherForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  const apiKey = '950b9c64d8abd725bcfae41780db4cd0'; // Replace with your API key
  const cityName = cityInput.value;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;

    weatherDisplay.innerHTML = `
      <p><strong>Weather:</strong> ${weatherDescription}</p>
      <p><strong>Temperature:</strong> ${temperature}°C</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
    `;

    weatherInfo.classList.remove('hidden');
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
});
