import React from "react";
import "./Nav.css"

function Nav() {
    return (
        <nav class="navbar">
        <div class="container-fluid">
                <a href="https://www.sport24.gr/">
                    <img src="https://www.sport24.gr/resources/f6b778c/images/logo_sport24.svg" alt="SPORT24" width="163" height="25" />
                </a>
            <a class="nav-link" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Favorites</a>
            <a class="nav-link" href="#">Bet</a>
            <a class="nav-link" href="#">Videos</a>
            <a class="nav-link" href="#">Match Center</a>
            <a class="nav-link" href="#">Videos</a>
            <a class="nav-link" href="#">About Us</a>
        </div>
    </nav>
    );
};

export default Nav; 
