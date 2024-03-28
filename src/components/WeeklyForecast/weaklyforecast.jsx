import './weeklyforecast.css' 
import {useWeather} from '../Context/ContextProvider'
function WeaklyForecast(){
    const {weaklyForecast,loader} = useWeather()
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    
    if(weaklyForecast !== undefined){
    return(
        <div className='weekly-forecast'>
            {
         
         weaklyForecast.map((day)=>{
            return(
                <div key={day.dt} className='day'> 
                    <span>{days[new Date(day.dt * 1000).getDay()]}</span>
                    <span>🌩 {day.weather[0].main}</span>
                    <span>{(day.temp.day-273.15).toFixed()+'°/'+(day.temp.night-273).toFixed()+'°'}</span>
                    
                </div>
            )
         })
        }
        </div>
    )}
    else{
        return( <div>loading...</div>)
    }
}
export default WeaklyForecast