import React,{useContext,useEffect, useState} from 'react'
import { withRouter , useLocation } from 'react-router-dom';
import { WeatherContext } from '../contexts/WeatherContext';
import ItemDeatail from './ItemDeatail';


const Detail = (props) => {
    
    
    const {location,findWeatherDayDetail,dataLoaded} = useContext(WeatherContext);
    const [loading,setLoading] = useState(true)

    //const item = props.location.state.item;

   const [item,setItem] = useState(null);
    
   const { search } = useLocation();


 
  useEffect(()=>{

    if(!dataLoaded){
        props.history.push('/');
    }
    return () => {
     
    };
  
}, );


useEffect(
  ()=>{

    let mounted = true;
    
    const loadData = async (key)=>{
     const res = await findWeatherDayDetail(key);
    
     if(mounted){
      setItem(res);
      setLoading(false);
     }
    };

    
    const key = new URLSearchParams(search).get('_k');
    loadData(key);

    
  return(()=>{
    mounted = false;
  })

},[]);






    return (
         loading == true  ? <h1 className='forecast-header'> Loading, please wait </h1> :<ItemDeatail item ={item}/>
      

    );
}

export default  withRouter(Detail);
