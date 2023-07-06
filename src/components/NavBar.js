import React from "react";
import { Link } from "react-router-dom";
// useMatch, useResolvedPath
import '../Css/NavBar.css'


// import Diamondlogo from '.../Assets/Diamondlogo'

import Show from "../pages/Show";

const NavBar = () => {
    return (
    //style={{paddingBottom: '2px', paddingTop: '2px'}}
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" >
            <div class="container px-4 px-lg-5" >
                {/* <Link to='/' className='logo'><img src={logo} className='logo' style={{
                            height: '80px', width: '80px' }}/></Link> */}
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Navigation
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        {/* <li class="nav-item" style={{
                        padding: '10px'}}><Link to='/login'>Login</Link></li> */}
                        <li class="nav-item" style={{
                        padding: '10px'}}><Link to='/diamonds/Info'>Info</Link></li>
                        <li class="nav-item" style={{
                        padding: '10px'}}><Link to={`/diamonds`}>Diamonds</Link></li>
                        <li class="nav-item" style={{
                        padding: '10px'}}><Link to={`/diamonds/new`}>Customize</Link></li>
                        <li class="nav-item" style={{
                        padding: '10px'}}><Link to={`/AboutDev`}>Dev</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// function CustomLink ({to, children, ...props}){

//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({path: resolvedPath.pathname, end: true})
    
    
//     return (
//         <li className={isActive? 'active': ''}>
//         <Link to={to} {...props}> 
//         {children}
//         </Link>
//         </li>
//     )
// }

export default NavBar;