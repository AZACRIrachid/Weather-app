import React from 'react';
import SerachFrom from './components/SerachFrom';
import WeatherContextProvider from './contexts/WeatherContext';
import DayItem from './components/DayItem';
import Forecast from './components/Forecast';
import Home from './components/Home';
import Detail from './components/Detail';
import { BrowserRouter,Route,Switch } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <WeatherContextProvider>

    {/* <SerachFrom/> */}
    <Switch>

    <Route exact path='/' component={Home}/>
    <Route path='/weather' component={DayItem}/>
    <Route path='/forecast' component={Forecast}/>
    <Route path='/detail/:city' component={Detail}/>
    

    </Switch>
    
   
    </WeatherContextProvider>

    

    </div>
    </BrowserRouter>
  );
}

export default App;
