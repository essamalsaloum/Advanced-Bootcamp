import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <header>
                <h2><a> Recipe App </a></h2>
                <nav>
                    <li><a href="">New Recipe</a></li>
                    <li><a href=""></a>Home</li>
                    <li><a href=""></a>About</li>
                    <li><a href=""></a>Contact Us</li>
                </nav>
            </header>
        );
    }
}

export default Navbar;