import React, { useState,useContext ,useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {WeatherContext} from '../contexts/WeatherContext';
import utils from '../utils/helpers'
import {Link,NavLink} from 'react-router-dom';
import Navbar from './Navbar';
const DayItem = (props) => {

    const {dailyData,dataLoaded,location} =  useContext(WeatherContext);
    //const [loading,setLoading] = useState(true);

    const date = utils.getDate(dailyData.dt);
    const icon = dailyData.icon;
    
    useEffect(()=>{
        
        
        if(!dataLoaded){
        props.history.push('/');
        }
        //setLoading(false);
        return () => {
         
        };
    },[])

    return (
        
      !dailyData
      ? <h1 className='forecast-header'> Loading, please wait </h1>
      :
      
              <div >

              <div  className='dayContainer'>

              <Navbar/>

                <h1>Today forecast</h1>
                <img className='weather' src={'/images/weather-icons/'+ icon +'.svg'} alt='Weather' />
                    <h2 className='subheader'>{date}</h2>
              </div>

                <div>
                
                  <div className='description-container'>
                    <p><b>{location.city}-{location.country}</b></p>
                    <p>{dailyData.description}</p>
                    <p>Temp: {dailyData.temp} °C</p>
                    <p>Sunrise: {utils.WeatherTimeParser(dailyData.sunrise)} am</p>
                    <p>Sunset: {utils.WeatherTimeParser(dailyData.sunset)} pm</p>
                  </div>
                </div>


                </div>

        );
  }
 


export default  withRouter(DayItem);
