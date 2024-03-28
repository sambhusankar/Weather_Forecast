import React from 'react'
import {useNavigate} from 'react-router-dom'
//import {routerProvider} from '../Context/ContextProvider'
function Nav(){
    //const {navigate,location} = routerProvider()
    const navigate= useNavigate()
    const handleNavigate = ()=>{
        navigate('/cities')
    }
    return(
       
    <div className='navbar'>
        <h1 className='logo'>WeatherTriples.com</h1>
        <button onClick={handleNavigate} className='cities-button' >Your Cities</button>
    </div>
    
    )
}
export default Nav