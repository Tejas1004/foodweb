import React from "react";
const Navbar = () => {
    return(
    <nav className="navbar">
        <div className="navbar__text">
            <div className="logo">
                <img src="" alt="logo"></img>
            </div>
                <ul className="navbar__ul">
                     <li>
                        <a href="www.home.com">Home</a> 
                    </li>
                     <li>
                        <a href=""> Menu</a>
                    </li>
                     <li>
                         <a href="">Service</a>
                    </li>
                     <li>
                         <a href="">News</a>
                     </li>
                     <li>
                     <a href="">Contact</a>
                     </li>
                </ul>
        </div>
    </nav>
    );
}
export default Navbar;
