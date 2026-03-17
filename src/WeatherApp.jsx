<<<<<<< HEAD
import { useState } from 'react';
import InfoBox from './infoBox';
import SearchBox from './SearchBox';
import "./App.css";

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

    //This is wrapper function.
    //updateInfo is a wrapper around setWeatherInfo
    let updateInfo = (newinfo) =>{
        setWeatherInfo(newinfo);
    }

    return(
        <div style = {{textAlign : "center"}}>
            <h2 className="fancy-heading">Weather App By Marvellous</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
} 

// SearchBox = child component
// updateInfo = props चं नाव
// {updateInfo} = WeatherApp मधला function

// info =

// {
//   city,
//   temp,
//   humidity,
//   ...
// }



// 0️⃣ updateInfo आहे तरी काय?
// let updateInfo = (newinfo) => {
//     setWeatherInfo(newinfo);
// };


// 👉 updateInfo = wrapper around setWeatherInfo
// 👉 हे WeatherApp मध्ये define आहे
// 👉 Child ला power देण्यासाठी बनवलं आहे

// 1️⃣ Flow – high level diagram
// User
//  ↓
// SearchBox
//  ↓
// updateInfo(newinfo)
//  ↓
// WeatherApp
//  ↓
// setWeatherInfo(newinfo)
//  ↓
// React re-render
//  ↓
// InfoBox updated

// 2️⃣ Step-by-step execution (actual runtime)
// 🔹 STEP 1: WeatherApp render होताना
// <SearchBox updateInfo={updateInfo} />


// React internally करतो:

// SearchBox({
//   updateInfo: updateInfo   // function reference
// });


// ❗ function call नाही
// ❗ फक्त reference pass

// 🔹 STEP 2: SearchBox ला prop मिळतो
// export default function SearchBox({ updateInfo }) {


// आता SearchBox कडे आहे:

// updateInfo === WeatherApp.updateInfo

// 🔹 STEP 3: User city search करतो
// <form onSubmit={handleSubmit}>


// User click → handleSubmit

// 🔹 STEP 4: API call होतो
// let newinfo = await getWeatherInfo();


// Example newinfo:

// {
//   city: "Pune",
//   temp: 29,
//   humidity: 60,
//   ...
// }

// 🔹 STEP 5: THE MOST IMPORTANT LINE 🔥
// updateInfo(newinfo);


// 👉 SearchBox WeatherApp चा function call करतो

// Equivalent to:

// WeatherApp.updateInfo(newinfo);

// 3️⃣ Now control goes UP (this is key)
// WeatherApp मध्ये:
// let updateInfo = (newinfo) => {
//     setWeatherInfo(newinfo);
// };


// 👉 state update
// 👉 React marks component as dirty

// 4️⃣ React does re-render automatically
// setWeatherInfo(newinfo)


// ⟶ WeatherApp re-renders
// ⟶ children re-render

// 5️⃣ New props flow DOWN
// <InfoBox info={weatherInfo} />


// Now:

// info === newinfo


// InfoBox UI update 🔥

// 6️⃣ Why this pattern is used? (interview logic)

// Because:

// ❌ Child cannot change parent state directly

// ✅ Parent gives controlled access via function

// This is called:

// “Lifting state up + callback props”

// 7️⃣ Real-life analogy (lock this in brain 🧠)

// 🏢 WeatherApp = Bank

// Holds money (state)

// 🧑 SearchBox = Customer

// Cannot open vault

// Gets cheque (updateInfo)

// Customer:

// updateInfo(amount);


// Bank:

// setBalance(amount);

// 8️⃣ One-line crystal conclusion

// updateInfo SearchBox मध्ये execute होतो, पण WeatherApp मध्ये state change करतो — म्हणून data वर जातो आणि UI खाली येतो.

// 9️⃣ Interview-ready sentence

// “The parent component passes a callback function as a prop to the child, enabling the child to send updated data upward and trigger a state change in the parent, which causes a re-render and updates dependent child components.”

// जर तू म्हणशील तर पुढचा natural doubt मी clear करतो:

// // 👉 “Why not keep weatherInfo state inside SearchBox?”
// कारण InfoBox ला पण तोच data हवा आहे
// 👉 आणि React मध्ये state common parent कडे असतो
=======
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
>>>>>>> f9bc231c01e9d9b0a1f68b91c11746ff348485a9
