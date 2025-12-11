import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){  //updateInfo is props jo component me hi ayega
    let[city , setCity] = useState("");
    let[error , setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4c0b7ff428d39c8af35c73789a3b9af0";

    let getWeatherInfo = async() =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);  //I just follow syntax of API here in geocoding
            let jsonRes = await response.json();
            console.log(jsonRes);   //This is very imp to check fields bcz of console we find main and all
            let result = {
                city : city,
                temp : jsonRes.main.temp,
                tempMin : jsonRes.main.temp_min,
                tempMax : jsonRes.main.temp_max,
                humidity : jsonRes.main.humidity,
                feelsLike : jsonRes.main.feels_like,
                weather : jsonRes.weather[0].description,

            };
            console.log(result);
            return result;
        }catch(err){
           throw err;
        }
        
    }


    let handleChange = (event)=>{
        setCity(event.target.value);
    };

    let handleSubmit = async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
            setError(false);   // <-- clear the old error
        }catch(err)
        {
            setError(true);
        }
        
    }

    return(
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>Search</Button>

                {error && <p style={{color:"red"}}>No such place exists!</p>}

            </form>
        </div>
    )
}