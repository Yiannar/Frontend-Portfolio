import React from "react";
import { Link } from "react-router-dom";


const NavBar = ()=>{
    return(
        <nav>
            <h1 className="header">
                <Link to='/diamonds'></Link>
            </h1>
            <ul>
                <li>
                    <Link to='/diamonds/new'></Link>
                </li>
            </ul>
        </nav>
    );
};


export default NavBar;

