import { useState } from 'react';
import InfoBox from './infoBox';
import SearchBox from './SearchBox';

export default function WeatherApp(){

    const [weatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelslike : 24.84,
        temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidty : 47,
        weather : "haze",
    });

    let updateInfo = (newinfo) =>{
        setWeatherInfo(newinfo);
    }

    return(
        <div style = {{textAlign : "center"}}>
            <h2>Weather App By Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
} 