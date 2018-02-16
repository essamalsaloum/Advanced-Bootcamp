import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

class Navbar extends Component {
    static defaultProps = {
        onNewRecipe() {}
    }

    static propTypes = {
        onNewRecipe: PropTypes.func
    }

    render() {
        return (
            <header>
                <h2><a> Recipe App </a></h2>
                <nav>
                    <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
                    <li><a href=""></a>Home</li>
                    <li><a href=""></a>About</li>
                    <li><a href=""></a>Contact Us</li>
                </nav>
            </header>
        );
    }
}

export default Navbar;