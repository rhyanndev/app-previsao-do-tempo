const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

function showcurrentDatetime() {
    var currentdate = new Date();
    var day = currentdate.getDate();
    var month = currentdate.getMonth() + 1;
    var year = currentdate.getFullYear();
    var hour = currentdate.getHours();
    var minute = currentdate.getMinutes();
    
    var dateTimeFormatted = `${day}/${month}/${year} ${hour}:${minute}`;
    
    // Atualizar o conteúdo do elemento HTML com a data e hora atual
    document.getElementById('dateCurrentTime').textContent = dateTimeFormatted;
}


i18next.use(i18nextHttpBackend).init({
    lng: 'pt-BR', // Defina o idioma inicial para português brasileiro
    fallbackLng: 'en', // Caso a tradução não esteja disponível, fallback para inglês
    backend: {
      loadPath: 'translations/ptbr.json' // Caminho para os arquivos de tradução
    }
  }).then(() => {
    // Função para traduzir o texto
    function translateText(text) {
      return i18next.t(text);
    }

    search.addEventListener('click', () => {
        const APIKey = 'sua API';
        const city = document.querySelector('.search-box input').value;
    
        if(city === '')
            return;
    
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then
            (json => {
    
                if(json.cod === '404'){
                    container.style.height = '400px';
                    weatherBox.style.display = 'none';
                    weatherDetails.style.display = 'none';
                    error404.style.display = 'block';
                    error404.classList.add('fadeIn');
                    return;
                }
    
                error404.style.display = 'none';
                error404.classList.remove('fadeIn');
    
                const image = document.querySelector('.weather-box img');
                const temperature = document.querySelector('.weather-box .temperature');
                const description = document.querySelector('.weather-box .description');
                const humidity = document.querySelector('.weather-details .humidity span');
                const wind = document.querySelector('.weather-details .wind span');
    
                switch(json.weather[0].main){
    
                    case 'Clear':
                    image.src = 'images/clear.png';
                    break;
    
                    case 'Rain':
                    image.src = 'images/rain.png';
                    break;
    
                    case 'Snow':
                    image.src = 'images/snow.png';
                    break;
    
                    case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;
    
                    case 'Haze':
                    image.src = 'images/mist.png';
                    break;
    
                    default:
                        image.src = '';
                }
    
                temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
    
                // Traduzir a descrição do tempo
                let translatedDescription = i18next.t(json.weather[0].main);
    
                // Se a tradução não estiver disponível, use a descrição original
                if (translatedDescription === json.weather[0].main) {
                  translatedDescription = i18next.t('default');
                }
    
                description.innerHTML = translatedDescription;
                
                humidity.innerHTML = `${json.main.humidity}%`;
                wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

                weatherBox.style.display = '';
                weatherDetails.style.display = '';
                weatherBox.classList.add('fadeIn');
                weatherDetails.classList.add('fadeIn');
                container.style.height = '590px';
    
    
            });
    
            showcurrentDatetime();
            setInterval(showcurrentDatetime, 1000);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar traduções:', error);
  });


