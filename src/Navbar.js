import React from "react";

const Navbar = () => {
    return(
        <header>
        <div class="navbar">
            <div class="logo"><a href="#">Toro2Go</a></div>
            <ul class="links">
                <li class="item"><a href="#">Home</a></li>
                <li class="item"><a href="#">Login</a></li>
                <li class="item"><a href="#">Profile</a></li>
            </ul>
        </div>
    </header>
    );
}

export default Navbar;