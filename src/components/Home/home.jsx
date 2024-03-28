import Current from '../Current/current'
import Forecasts from '../Forecasts/forecasts'

function Home(){

  
    return(
      <div className='main-content' >
        <Current />
        <Forecasts />
      </div>
    )
  }
  
  export default Home