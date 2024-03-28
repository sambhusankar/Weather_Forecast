
import React,{useEffect} from 'react'
import './Current.css'
import {useWeather} from '../Context/ContextProvider'

function Current(){
    const {time,selectedCity,tempreture,icon} = useWeather()
    
    return(
        <div className='current'>
             <h1 className='celcius'>{(tempreture-(273.15)).toFixed(0)}<sup className='degree'>℃</sup></h1>
             <span className='icon'>
             {icon}
             </span>
            <h3 className='city'>{selectedCity}</h3>
            <p>{time}</p>
          
    </div>
    )
}
export default Current 