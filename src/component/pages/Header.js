import React, { useState } from "react";
import "../assets/css/Header.css";
import { Link, NavLink, useHistory } from "react-router-dom";
import {auth} from '../../firebase'
import { Dropdown } from "react-bootstrap";
import AuthProvider from  '../../contexts/AuthContext'

// import { useAuth0 } from "@auth0/auth0-react";

function Header() { 
    // const { loginWithRedirect } = useAuth0();  
    return(
        <>
        <div className="nav-bg sticky-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm" >
                <Link to="/" className="container-fluid">
                    <svg className="logo-s" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 360">
                        <defs>
                            <style>
                            {'.cls-1{fill:#fff;}'}
                            </style>
                        </defs>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path className="cls-1" d="M245.82,291.71c0-11.56-.21-23.13.1-34.69.13-5-1.21-7.79-6.22-9.95C163.1,214,86.65,180.51,10,147.49c-7.4-3.19-10.17-7.1-10-15.21.5-26.68.35-53.37.06-80.05C0,46.15,1.8,42,7.18,39.24,19.56,32.93,31.72,26.16,44.31,20.3,53.19,16.16,56.87,19,56.92,29c.09,23.12.19,46.25-.08,69.38-.06,5.42,1.32,8.25,6.66,10.56,76.88,33.2,153.6,66.76,230.47,100,6.43,2.78,8.86,6.27,8.77,13.3-.36,27-.31,54,0,80.94.07,6.4-1.76,10.77-7.51,13.66-12.42,6.25-24.58,13-37.17,18.88-8.34,3.87-12.12,1-12.22-8.4C245.72,315.43,245.81,303.57,245.82,291.71Z"/><path class="cls-1" d="M123,298.1V233c0-2.37-.15-4.75,0-7.11.46-6.7,4.4-9.19,10.3-6.8,14,5.67,27.9,11.53,41.4,18.2,2.69,1.33,4.72,6.6,4.83,10.12.5,16.24.22,32.5.22,50.54,12.59-2.66,24.33-4.87,35.92-7.64,11.38-2.72,13.71-1.14,13.75,10.73,0,12.15-.1,24.3,0,36.45.07,5.6-2.17,8.55-7.81,9.94C174.75,359,127.88,358.33,81,347.39c-5.77-1.34-7.73-4.51-7.67-10,.13-13-.1-26.08.09-39.11.12-8.29,3.07-10.24,11.23-8.43C97,292.57,109.39,295.17,123,298.1Z"/><path class="cls-1" d="M179.77,57.77V121.2c0,2.67.14,5.35,0,8-.46,7.2-4,10.09-10.46,7.49-14-5.66-27.9-11.53-41.39-18.23-2.66-1.32-4.56-6.67-4.67-10.24C122.72,92,123,75.73,123,57.82c-13,2.76-25,5.14-37,7.9-9.92,2.29-12.59.56-12.68-9.36-.1-12.15.2-24.31-.11-36.45-.17-6.65,2-10.2,8.9-11.85,46.4-11.09,92.68-10.46,139,.2,6,1.38,8.46,4.35,8.36,10.4-.2,12.74.06,25.49-.08,38.23-.11,9.3-3,11.07-12.34,8.9C205.08,63,193,60.59,179.77,57.77Z"/>
                                <path className="cls-1" d="M302.58,76.48c0,8,.42,16-.2,24-.26,3.33-1.94,7.64-4.44,9.31-1.54,1-6.22-1.54-8.85-3.4C276.82,97.7,264.56,89,252.78,79.62c-3.19-2.53-6.43-7.09-6.66-10.9-.82-13.29-.41-26.66-.3-40,.07-9.41,3.88-12.48,12.07-8.62,13.36,6.3,26.47,13.18,39.23,20.6,2.81,1.64,4.91,6.47,5.22,10C303.09,59.25,302.59,67.89,302.58,76.48Z"/><path class="cls-1" d="M56.92,307.18c0,6.52.08,13,0,19.56-.15,10.06-3.74,12.94-12.52,8.79-13.09-6.18-25.94-12.93-38.44-20.21C3.09,313.66.56,308.9.45,305.48-.11,288.6,0,271.69.38,254.8c.07-3,2.12-8.24,3.93-8.56,3-.52,6.94,1.55,9.75,3.56,11.54,8.21,22.4,17.42,34.32,25,6,3.81,9.35,7.32,8.69,14.6-.54,5.88-.11,11.85-.11,17.78Z"/>
                            </g>
                        </g>
                    </svg>
                </Link>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="navbar-collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav d-flex align-items-end">
                        <li className="nav-item px-10">
                            <NavLink
                            className="nav-link link-white"
                            to="/platforms"
                            activeClassName="nav-active"
                            exact>
                            Platforms
                            </NavLink>
                        </li>
                        <li className="nav-item px-10 ">
                            <NavLink
                            className="nav-link link-white"
                            activeClassName="nav-active"
                            to="/products">
                            Products
                            </NavLink>
                        </li>
                        <li className="nav-item px-10">
                            <NavLink
                            className="nav-link link-white"
                            activeClassName="nav-active"
                            to="/about"
                            >
                            About
                            </NavLink>
                        </li>
                        <li className="nav-item px-10">
                            <NavLink
                            className= "nav-link link-white"
                            activeClassName="nav-active"
                            to="/support">
                            Support
                            </NavLink>
                        </li>
                        <li className="nav-item px-10">
                            <Link
                            to="/signup"
                            className= "nav-link link-black signup-box"
                            // onClick={() => loginWithRedirect()}
                            >
                            Sign Up
                            </Link>
                        </li>
                    </ul>
                    </div>
                </nav>
        </div>
        </>

    )
};
export default Header;