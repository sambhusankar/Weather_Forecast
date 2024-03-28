import './dailyforecast.css'
import {useWeather} from '../Context/ContextProvider'
function DailyForecast(){
    
     const {hourlyForecast,loader} = useWeather()
     const icon = <p>⛅</p>
     
    if(hourlyForecast !== undefined){
        
    return(
        <div className='daily-forecast'>
          {
            hourlyForecast.map((hour)=>{
                return(
                    <span key={hour.dt} style={{textAlign:'center'}}>
                        <p>{new Date(hour.dt * 1000).getHours()+ ':00'}</p>
                        {icon}
                        <p>{(hour.temp-273.15).toFixed(0)+'°'}</p>
                    </span>
                )
            })
            }    
        </div>
    )
        }
        else{
            return( <div>loading...</div>)
        }
}
export default DailyForecast