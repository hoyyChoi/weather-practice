import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react'
import Box from './component/Box';
import Buttonweather from './component/Buttonweather';
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  const [weather,setWeather] = useState(null)
  const [city,setCity] = useState("")
  const [loading,setLoading] = useState(false)
  const cityArray=['paris','new york','hanoi','seoul','tokyo']

  const getCurrentlocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat =  position.coords.latitude 
      let lon = position.coords.longitude
      getweatherCurrentLocation(lat,lon)
    });
  }

  const getweatherCurrentLocation=async(lat,lon)=>{
    const API_url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=53004077073f969526a1f51fbeaa75b8&units=metric`
    setLoading(true)
    let response = await fetch(API_url)
    let data = await response.json()
    setWeather(data)
    setLoading(false)
  }

  const checkweather=async()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=53004077073f969526a1f51fbeaa75b8&units=metric`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
    setLoading(false)
  }

  useEffect(()=>{
    if(city==''){
      getCurrentlocation()
    }else{
      checkweather()
    }
  },[city])


  const cityCurrent = (cur)=>{
    cur=='current'?setCity(''):setCity(city)
  }
  
  return (
    <div>
      {loading?
      <div className="inner">
        <ClipLoader color='#f88c6b' loading={loading} size={150} />
      </div>
        :<div className="inner">
            <Box weather={weather}/>
            <Buttonweather cityArray={cityArray} setCity={setCity} cityCurrent={cityCurrent}/>
          </div>}
    </div>
    
  );
}

export default App;
