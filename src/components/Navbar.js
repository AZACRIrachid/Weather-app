import React from 'react'
import {Link,NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            
        <nav className="navbar navbar-default">
		<div className="container-fluid">
			 
			
				  <ul className="nav navbar-nav">
                       
                        <li><NavLink to="/weather">Today</NavLink></li>
                        <li><NavLink to="/forecast">Weekday</NavLink></li>
				  </ul>

			 </div>
		
         </nav>


        </div>
    )
}

export default Navbar



