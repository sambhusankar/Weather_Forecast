import { useState ,useEffect} from "react"

function Location(){
    const [lat,setLat] = useState('')
    const [lon,setLon] = useState('')
    const [location,setLocation] = useState('')
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
          setLat(position.coords.latitude)
          setLon(position.coords.longitude)
        })
    },[])
       
    useEffect(()=>{
            fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=94f4d7183c05a9dd104fac2628720857`)
            .then((res)=> res.json())
            .then((res)=> setLocation(res[0].name)
               )
    },[lat,lon])

    
    return location
}
export default Location