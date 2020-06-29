import React , {useContext} from  'react'
import { withRouter , useLocation } from 'react-router-dom';
import {WeatherContext} from '../contexts/WeatherContext';
import utils from '../utils/helpers'
const ItemDeatail = (props) => {
    const {location} = useContext(WeatherContext);
    const item = props.item;

   
    return (
        <div id="daily-detail" className="text-center">
      <button onClick={props.history.goBack}>Back</button>


        <div className="description-container">
        <h2>Detail</h2>

        <img className='weather' src={'/images/weather-icons/'+ item.weather[0].icon +'.svg'} alt='Weather' />
          <h2 className='subheader' >{ utils.getDate(item.dt)}</h2>
        <p><b>{location.city }-{location.country}</b></p>
        <p>{item.weather[0].description}</p>
        <p>Min temp: {item.temp.min} °C</p>
        <p>Max temp: {item.temp.min} °C</p>
        <p>Morning: {item.temp.morn} °C</p>
        <p>Evening: {item.temp.eve} °C</p>
        <p>Night: {item.temp.night} °C</p>
        <p>Humidity: {item.humidity}%</p>
        <p>Wind Speed: {(item.speed * 3.6).toFixed(2)} Km/h</p>
        </div>
        </div>
    )
}

export default  withRouter(ItemDeatail);
