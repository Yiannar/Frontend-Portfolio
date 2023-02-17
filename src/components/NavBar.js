import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import Diamondlogo from '.../Assets/Diamondlogo'
import './NavBar.css'
import Show from "../pages/Show";

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="Diamond-Site">Diamond</Link>
            <ul>
                <li><Link to='/diamonds' className="listofdiamonds">Diamonds</Link> </li>
                <li><Link to="/diamonds/new" className="newDiamond">Custom Diamond</Link> </li>
                {/* <li><Link to="/diamonds/cart" className="cart">Cart</Link> </li>
                <li><Link to="/diamonds/checkout" className="checkout">Checkout</Link> </li> */}
                <li><Link to="/diamonds/AboutDev" className="aboutDev">About Dev</Link> </li>
             
            </ul>
        </nav>
    );
};

function CustomLink ({to, children, ...props}){

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    
    
    return (
        <li className={isActive? 'active': ''}>
        <Link to={to} {...props}> 
        {children}
        </Link>
        </li>
    )
}

export default NavBar;