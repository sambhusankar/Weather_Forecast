import { useEffect } from 'react'
import {useWeather} from '../Context/ContextProvider'
import './cities.css'
import {Link} from 'react-router-dom'
function Cities(){
    const{cities,updateSelectedCity,removeCity,selectedCity} = useWeather()
    const UpdateSelectedCity =(city)=>{
      updateSelectedCity(city)
    }
    const RemoveCity = (city)=>{
      removeCity(city)  
    }
   
    if(cities.length >0){
       return(

        <div>
         {cities.map((city)=>{
            return(
               <div key={city} className='cities' onClick={()=>UpdateSelectedCity(city)} >{city}   <button onClick={()=>RemoveCity(city)} className='remove-btn'>remove</button></div>
            )
         })}
            <Link className='addcity-btn' to='/search'>+</Link>
           </div>
       )
      }else{
         return(
            <div className='message-page'>
            <img className='image' src='https://media.tenor.com/V994Pis5f7cAAAAj/location-maps.gif'></img> 
            <h2 className='message'>No cities added</h2>
            <Link className='addcity-btn' to='/search'>+</Link>
            </div>
         )
      }
   
}
export default Cities