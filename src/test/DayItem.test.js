import React from 'react'
import ReactDOM from 'react-dom'
import {WeatherContext,WeatherContextProvider} from './contexts/WeatherContext'

import { render, cleanup,  fireEvent } from '@testing-library/react'


import { MemoryRouter } from "react-router-dom";
import DayItem from './components/DayItem'

//import { renderHook } from '@testing-library/react-hooks'


it('checks if initial state is equal to 0', () => {
    const dailyData = null ;
        const contextstate = true ;
        const location ={
            city: 'paris',
            country:'france'
        } ;
        const fullData = null;
        const error = true;
        const SerachTodayWeather = jest.fn();
        const findWeatherDayDetail = jest.fn();

      
        const { container, getByTestId } = render(
        <MemoryRouter initialentries="{['/weather']}">


             <WeatherContextProvider value={{ dailyData, fullData ,contextstate,SerachTodayWeather,location,error,findWeatherDayDetail}}>
        
        <DayItem />
    
        </WeatherContextProvider>
    </MemoryRouter>
           );
       
       console.log(container)


       expect(getByTestId('test')).toHaveTextContent(`Loading, please wait`);
});



