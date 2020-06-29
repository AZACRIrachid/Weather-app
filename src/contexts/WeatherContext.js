import React,{createContext ,useState} from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

const api_key = "1c03cb992b00253b570f4d85483502fc"

const WeatherContextProvider = (props) => {


      const [fullData, setFullData] = useState([]);
      const [dailyData, setDailyData] = useState({
        city :'',
        country :'',
        temp:'',
        temp_max:'',
        temp_min:'',
        description:'',
        dt:'',
        icon:''
      });
      const [loading, setLoading] = useState(true);
      const [dataLoaded, setDataLoaded] = useState(false);
      const [contextstate, setContextstate] = useState(false);
      const [error, setError] = useState(false);
    
    
      const [location, setLocation] = useState({
        city:'',
        country:''
    });

   



   const getWeather = async ({city,country}) => {
   
    if (city && country) {

        try {
            const api_call = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${api_key}`);
        const response = await api_call;
       


        setDailyData({
        city :response.data.name,
        country :response.data.sys.country,
        temp :response.data.main.temp,
        temp_max :response.data.main.temp_max,
        temp_min:response.data.main.temp_min,
        description:response.data.weather[0].description,
        dt:response.data.dt,
        icon:response.data.weather[0].icon,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset

        });
        


        console.log(response.data);

     

       
        } catch (error) {
            if (error) {
                console.log(error.message, 'Try updating the API key or city and country no valide')
              }  
            setError(true);
        }
        

    }
}


 const findWeatherDayDetail = (dt)  =>{
    

    const elem =  fullData.find((element) => {
        console.log( element.dt , "===", dt);
        return element.dt == dt;
      })
    
     return elem;

 }


const getWeatherWeek = async ({city,country}) => {
   
    if (city && country) {

        try {
        const api_call = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&units=metric&appid=${api_key}&cnt=7`);
        const response = await api_call;
       
        setFullData(response.data.list);
   
    } catch (error) {
              

        if (error) {
            console.log(error.message, 'Try updating the API key or city and country no valide')
          }  
        setError(true);

    }
}
}

   const SerachTodayWeather = (location) =>{
     
       setLocation({city : location.city , country: location.country});

        getWeather(location);
        getWeatherWeek(location);
        setContextstate(true);
        setDataLoaded(true);

       
   };



   return ( 
    <WeatherContext.Provider value={{ dailyData, fullData ,dataLoaded,contextstate,SerachTodayWeather,location,error,findWeatherDayDetail}}>
        {props.children}
    </WeatherContext.Provider>

 );

}


export default WeatherContextProvider;





