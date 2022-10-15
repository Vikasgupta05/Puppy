import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="Navbar">
            <div  style={{display : "flex" , justifyContent : "space-between" , backgroundColor : "teal"}}>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/puppy">Puppy</Link>
            </div>
        </div>
    )
}