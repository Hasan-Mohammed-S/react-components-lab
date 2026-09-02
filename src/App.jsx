import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import './App.css';
import sun from './assets/day.svg'; 
import nightImg from './assets/night.svg';
import stormy from './assets/stormy.svg';
import overcast from './assets/cloudy-day.svg';
import cloudy from './assets/cloudy-night.svg';

const weatherForecasts = [
  {
    day: 'Mon',
    img: sun,
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: nightImg,
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: stormy,
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img:overcast ,
   imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: cloudy,
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];


const App =()=>{

  return(
<>
<h1>Local Weather</h1>
<section>
{weatherForecasts.map((forecast,index)=>(
 <WeatherForecast
 key={index} 
 day={forecast.day}
 img={forecast.img}
 imgAlt={forecast.imgAlt}
 conditions={forecast.conditions}
 time={forecast.time}
   />
))}

</section>
</>

  );
};


export default App;