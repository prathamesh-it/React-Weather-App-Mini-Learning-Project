import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


//ICONS 
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css"

export default function InfoBox({ info }){

    const INIT_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1603262439120-3e17d13bab3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


     const getWeatherIcon = () => {
        if (info.humidity > 80) {
            return <ThunderstormIcon sx={{ fontSize: 40, color: "#1976d2" }} />;
        } else if (info.temp > 15) {
            return <WbSunnyIcon sx={{ fontSize: 40, color: "orange" }} />;
        } else {
            return <AcUnitIcon sx={{ fontSize: 40, color: "#00bcd4" }} />;
        }
    };
    // let info = {   1st we write it here then we take from weatherApp component
    //     city : "Delhi",
    //     feelslike : 24.84,
    //     temp : 25.05,
    //     tempMin : 25.05,
    //     tempMax : 25.05,
    //     humidty : 47,
    //     weather : "haze",

    // };

    return(
        <div className="InfoBox">
            <div className='cardContainer'>            
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 
                        ? RAIN_URL 
                        : info.temp > 15 
                        ? HOT_URL 
                        : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div"
                        style={{ display: "flex", alignItems: "center", justifyContent: "center",
                        gap: "10px" }}
                    >
                    {info.city}
                    {getWeatherIcon()}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidty}</p>
                    <p>Min Temp = {info.tempMin}&deg;C </p>
                    <p>Max Temp = {info.tempMax}&deg;C </p>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C </p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}