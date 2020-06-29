import React, { useState,useContext,useEffect } from 'react'
import {WeatherContext} from '../contexts/WeatherContext';
import utils from '../utils/helpers'
import { withRouter } from 'react-router-dom';
//import { useHistory } from "react-router-dom";

import {Link,NavLink} from 'react-router-dom';
import Navbar from './Navbar';

const Forecast = (props) => {

   
    const {fullData,dataLoaded,location} =  useContext(WeatherContext);
    //const [loading,setLoading] = useState(true);
    //const history = useHistory();



    useEffect(()=>{
        
        
      if(!dataLoaded){
      props.history.push('/');
      }
     
      return () => {
        //setLoading(false);
       
      };
  },[])

 
  const  handleClickDetail = (item) => {


        

        props.history.push({
              pathname: `/detail/${location.city}`,
              item: item,
              search: `?_k=${item.dt}`,
              loc: location
          });
      

        console.log(item);


      };

        return (
          !fullData
            ? 
            <h1 className='forecast-header'> Loading, please wait </h1>
            : <div>
            
            <div className="dayContainer">
            <Navbar/>
            <h1>Week forecast</h1>
            </div>
           
                
          <h1 className='forecast-header'>{location.city}-{location.country}</h1>
          <div className='forecast-container'>
            { fullData.map( item => {

                return(
                <div className='dayContainer' key={item.dt}  >
               <img className='weather' src={'/images/weather-icons/'+ item.weather[0].icon +'.svg'} alt='Weather' />
                 <h2 className='subheader'>{ utils.getDate(item.dt)}</h2>
                 <Link to={{
      pathname:  `/detail/${location.city}`,
      search: `?_k=${item.dt}`,
      state: {  item: item}
    }}> detail</Link>
                
                </div>
                )
                }
            
            )}
          </div>
        </div>
        ); 
  }
 


export default  withRouter(Forecast);
