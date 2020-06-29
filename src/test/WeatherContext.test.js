import React from 'react'
import ReactDOM from 'react-dom'
import {WeatherContext,WeatherContextProvider} from './contexts/WeatherContext'
//import {mount} from 'enzyme';

import  App from './App';
import { MemoryRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import { render, cleanup,  fireEvent } from '@testing-library/react'

import { renderHook } from '@testing-library/react-hooks'



// describe('Test', () => {
//   it("should render the pathname", () => {
//     const container = render(
//       <MemoryRouter initialentries="{['/']}">
//         <Navbar />
//      </MemoryRouter>
//     );
//     //expect(asFragment()).toMatchSnapshot();
//     expect(container).toMatchSnapshot();
//   });
// })


/* test('should use counter', () => {
    const { result } = renderHook(() => Navbar())
    expect(result.current.test).toBe(true)
    //expect(typeof result.current.increment).toBe('function')
  })
 */


// describe('<TestComponent />', () => {
//     let wrapper;
//     const setState = jest.fn();
//     const useStateSpy = jest.spyOn(React, 'useState')
//     useStateSpy.mockImplementation((init) => [init, setState]);
  
//     beforeEach(() => {
//       wrapper = render( <MemoryRouter initialentries="{['/']}">
//                <Navbar />
//            </MemoryRouter>);
//     });
  
//     afterEach(() => {
//       jest.clearAllMocks();
//     });

//     describe('Zero', () => {
//         it('calls setCount with 0', () => {
//           wrapper.find('#zero-count').props().onClick();
//           expect(setState).toHaveBeenCalledWith(0);
//         });
//       });

// });




// const renderWithContext = (
//   component) => {
//   return {
//     ...render(
//         <WeatherContextProvider value={WeatherContext}>
//             {component}
//         </WeatherContextProvider>)
//   }
// }

// afterEach(cleanup);

// it('checks if initial state is equal to 0', () => {
//     const { getByTestId } = renderWithContext(

//         <MemoryRouter initialentries="{['/']}">
//         <SerachFrom />
//      </MemoryRouter>
//     )
//     expect(getByTestId('loading')).toHaveTextContent(true)
// })



/* afterEach(cleanup)

it('Context is updated by child component', () => {

   const {container} = render(
   
    <WeatherContextProvider value={WeatherContext}>

  
           <SerachFrom />
    
      </WeatherContextProvider>
      );

   console.log(container)
//    expect(getByText(/Some/i).textContent).toBe("Some Text")

//    fireEvent.click(getByText("Change Text"))

//    expect(getByText(/Some/i).textContent).toBe("Some Other Text")
})


 */

/* 
// const renderWithContext = (
//     component) => {
//     return {
//       ...render(
//           <WeatherContextProvider value={WeatherContext}>
//               {component}
//           </WeatherContextProvider>)
//     }
//   }
  
//   afterEach(cleanup);
  
//   it('checks if initial state is equal to 0', () => {
//       const { getByTestId } = renderWithContext(<SerachFrom />)
//       expect(getByTestId('Loding')).toHaveTextContent('0')
//   }) */