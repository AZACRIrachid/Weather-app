import React, {useState,useContext} from 'react'
import { WeatherContext } from '../contexts/WeatherContext';
import { withRouter } from 'react-router-dom';

const SerachFrom = (props) => {

    const {SerachTodayWeather} =  useContext(WeatherContext);

    const [state, setState] = useState({

        city:'',
        country:''
    });

   
      
     const  handleChange = (e) => {
        console.log(e.target.name);
        setState({...state, [e.target.name] : e.target.value });
        
     }

    const handleClick = (e) => {
     // e.preventDefault();
      console.log("search : city: ",state.city," + country:"+state.country);
      SerachTodayWeather(state);
      setState({
        city:'',
        country:''
      });
      props.history.push('/weather');
    }
    return (
        <div className='zipcode-container'
        style={{flexDirection: "column"}}>
         
                <input  className='form-control' type="text" name="city" onChange={handleChange}  value={state.city}  placeholder='Enter a city name'/>
                <input  className='form-control' type="text" name="country" onChange={handleChange}  value={state.country}  placeholder='Enter a country name'/>
               
                <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={handleClick}
          >
            Get Weather
        </button>
               
          
        </div>



          
     
    )
}

export default  withRouter(SerachFrom);
