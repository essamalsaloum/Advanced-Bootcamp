import React, {Component} from "react";
import HobbyList from "./HobbyList"
import "./Pet.css";


class Pet extends Component { 
    render() { 
      return (
        <div className="card">
            <h2 className="name">Cat</h2>
            <img alt="cat" src="https://images.unsplash.com/photo-1493406300581-484b937cdc41?ixlib=rb-0.3.5&s=74e941574ac2fa39f4de526f9f1c4bfc&auto=format&fit=crop&w=1050&q=80"
            />
            <h5 style={{fontSize: "2em", margin: "2px"}}>Hobbies</h5>
            <HobbyList />
        </div>); 
  } 
} 

export default Pet;