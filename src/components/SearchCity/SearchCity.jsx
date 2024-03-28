import './SearchCity.css'
import {useState} from 'react'
import {useWeather} from '../Context/ContextProvider'
function Search(){
    const {addCity,updateSelectedCity} = useWeather()
    const IndianCity=['Bhubaneswar','Chennai','Bengaluru','Mumbai','Delhi','Kolkata','Ranchi','Hyderabad']
    const WorldCity=['Paris','London','Hongkong','Tokyo','Nairobi']
    const [searchedCity,setSearchedCity] =useState('')
    const AddCity=(city)=>{
      addCity(city)
      updateSelectedCity(city)
      setSearchedCity('')
    }
    return(
        <div className='search'>
        <input type ='text' placeholder='search for a city...' className='input-city' value={searchedCity} onChange={(e)=>setSearchedCity(e.target.value)}></input>
        <button onClick={()=>AddCity(searchedCity)} className='add-btn'>Add</button>
        <div className='India-cities'>
            <h3 className='heading'>Top-Cities</h3>
           {
            IndianCity.map((city)=>{
               return <span key={city} onClick={()=>AddCity(city)} className='sugested-city'>{city}</span>
            })
           }
        </div>
        <div className='Top-cities'> 
        <h3 className='heading'>Top-Cities World</h3>
           {
            WorldCity.map((city)=>{
               return <span key={city} onClick={()=>AddCity(city)} className='sugested-city'>{city}</span>
            })
           }
        </div>
        </div>
    )
}
export default Search 