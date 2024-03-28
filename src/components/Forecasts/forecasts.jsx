import DailyForecast from '../DailyForecast/dailyforecast'
import WeaklyForecast from '../WeeklyForecast/weaklyforecast'
function Forecasts(){
    return(
        <div>
            <DailyForecast />
            <WeaklyForecast />
            
        </div>
    )
}
export default Forecasts