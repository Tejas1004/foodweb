import React from 'react'
import Navbar from "./Navbar";
const Header = () => {
    return (
        <div className="banner">
            <Navbar/>
            <div className="banner__content">
                  <div className="container">
                      <div className="banner__text">
                        <h3>Pizza Delivery</h3>
                        <h1>DOWNTOWN PIZZA AND SUBS</h1>
                        <p>
                               Loremnabbsjcsdjvxcnvnvcnncmxncncncnnnnnn
                             nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
                       </p>
                       <div className="banner__btn">
                         <a href="" className="btn btn-smart">
                           Delivery Now
                         </a>
                       </div>
                     </div>
                   </div>
            </div>
        </div>
    )
}

export default Header;
