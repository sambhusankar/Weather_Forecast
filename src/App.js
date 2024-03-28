import {useState,useEffect} from 'react'
import Nav from './components/Navbar/navbar'
import Cities from './components/Cities/cities'
import Search from './components/SearchCity/SearchCity'
import Home from './components/Home/home'
import {BrowserRouter as RouterProvider, Routes, Route, } from 'react-router-dom';
import {WeatherProvider} from './components/Context/ContextProvider'
import './App.css';



function App(){
  
  const [lat,setLat] = useState('')
  const [lon,setLon] = useState('')
  const [selectedCity,setSelectedCity] = useState('')
  const [tempreture,setTempreture] = useState('')
  const [icon,setIcon] = useState('')
  const [currentTime,setCurrentTime] = useState('')
  const [cities,setCities] = useState([selectedCity])
  const [hourlyForecast,setHourlyForecast] = useState([])
  const [weaklyForecast,setWeaklyForecast] = useState([])
  const [lat_,setLat_] = useState('')
  const [lon_,setLon_] = useState('')
  const [loader,setLoader] = useState(true)
  const [bgImg,setBgImg] = useState('')

  // To get live location automatically
  useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
  })
    
      try{
          fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=94f4d7183c05a9dd104fac2628720857`)
          .then((res)=> res.json())
          .then((res)=>{          
            setSelectedCity(res[0].name)
            setCities([res[0].name])
          })
          .catch((err)=>{ })
  
}
catch(err){
  console.log(err)
}
},[lat,lon])
  // To get tempreture, time and weather condition of a selectedCity
  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},ind&APPID=94f4d7183c05a9dd104fac2628720857`)
          .then((res)=> res.json())
          .then((response)=>{
            
            setTempreture(response.main.temp);
            
            var date = new Date(response.dt * 1000)
             var formatedDate = date.toLocaleTimeString()
              
               setCurrentTime(formatedDate)
              
              if (response.weather[0].main == 'Haze'){
                setIcon('🌤')
                setBgImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmioQWYOZYdj3xiUcz0k2nQKpCn9k_Y3e7ipJbameIPtBZFswVk7KicLhvrPZWlqYwb8&usqp=CAU')
              }
              if(response.weather[0].main == "Clouds"){
                setIcon('☁')
                setBgImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_BKeEdOkG4eAgX6QeCOhRIztMJ-UB0bFXeG7ucIF2QR7c8vOs_Re9DXYyLlk9nlWvHQ&usqp=CAU')
              }
              if(response.weather[0].main == "Clear"){
                setIcon('☀')
                setBgImg('https://images.pexels.com/photos/789152/pexels-photo-789152.jpeg?auto=compress&cs=tinysrgb&w=400')
              }
              if(response.weather[0].main == "Broken"){
                setIcon('🌤')
                setBgImg('https://img.freepik.com/premium-photo/sky-pastel-cloud-outdoor-nature-background-sweet-wallpaper-broken-heart-valentine-day-backdrop_301927-495.jpg')
              }
            } ) 
            .catch((err)=>{ })
          
            },[selectedCity])
          
 // to get hourly and daily forecat
 useEffect(()=>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},ind&APPID=94f4d7183c05a9dd104fac2628720857`)
  .then((res)=> res.json())
  .then((res)=>{
      setLat_(res.coord.lat)
      setLon_(res.coord.lon)
  })
},[selectedCity])
 useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat_}&lon=${lon_}&appid=94f4d7183c05a9dd104fac2628720857`)
         .then((res)=> res.json())
         .then((res)=>{
          setHourlyForecast(res.hourly)   
          setWeaklyForecast(res.daily)  
          setLoader(false)
         })
         .catch((err)=>{ })
 },[lat_,lon_])


 

  //context functnality
  const addCity = (city)=>{
    
       if (cities.includes(city)){
        
       }
       else{
        setCities((prev)=>[city, ...prev])
       }
  }
  const updatetime= ()=>{
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    setCurrentTime(`${hour} : ${minute} `)
    
  };
  const updateSelectedCity =(city)=>{
    setSelectedCity(city)
  }
  const removeCity = (city)=>{
    setCities((prev)=>prev.filter((prevCity)=> prevCity !==city))
    
  }
 if (!loader){
  return (
    <WeatherProvider value={{loader,tempreture,selectedCity,hourlyForecast,weaklyForecast,icon,addCity,removeCity,time:currentTime,updatetime,updateSelectedCity,cities}}>
        <RouterProvider>
         <Routes>
        
         <Route path='/' element={
        
        <div style={{backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundImage:`url(${bgImg})`}}> 
          <Nav />
          <Home />
        
         </div>}>
         </Route>
         
         <Route path='/cities' element={<Cities />}></Route>
         <Route path='/search' element={<Search />}></Route> 
        
      </Routes >
      
    </RouterProvider> 
     
    </WeatherProvider>
  );
         }
    else{
      return(
        <h1>data is loading...</h1>
      )
    }
}

export default App;

