import {useState,useEffect} from 'react'

function Weather(){
  const [lat,setLat] = useState('')
  const [lon,setLon] = useState('')
  const [weather,setWeather] = useState('')
  const [location,setLocation] = useState('')

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    })
  },[])
    
    useEffect(()=>{
     
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=94f4d7183c05a9dd104fac2628720857`
        )
    .then(
    (res)=> res.json()
    ).then(
    (res)=> console.log('')
            
        )   
        
    },[lat,lon])

    useEffect(()=>{
      fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=94f4d7183c05a9dd104fac2628720857`)
            .then((res)=> res.json())
            .then((res)=> setLocation(res[0].name)
               )
    },[lat,lon])
    
    useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},ind&APPID=94f4d7183c05a9dd104fac2628720857`)
            .then((res)=> res.json())
            .then((res)=> setWeather(res.main.temp)
               )
    },[location])

    return weather
    
}
export default Weather 