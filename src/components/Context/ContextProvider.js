import React,{createContext,useContext} from 'react'


const WeatherContext = createContext({
       loader:'',
       tempreture:'',
       icon:'',
       hourlyForecast :[],
       dailyForecast:[],
       cities:[],
       selectedCity:'',
       updateSelectedCity:()=>{},
       time:'',
       updatetime:()=>{},
       addCity:()=>{},
       removeCity:()=>{}

}) 
const useWeather = ()=> useContext(WeatherContext)
const WeatherProvider = WeatherContext.Provider
export  {useWeather,WeatherProvider}