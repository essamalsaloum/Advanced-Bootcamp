import React, {Component} from "react";
import "./Recipe.css";

class Recipe extends Component {
    render() {
        const {title, img, instructions} = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => 
        <li key={index}>{ing}</li>
    );
        return (
            <div className="recipe-card">
                <div className="recipe-card-img" >
                    <img src="https://raw.githubusercontent.com/rithmschool/udemy_course_exercises/master/react/recipe-props-starter/public/spaghetti.jpg" alt="{title}"/>
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title"> {title} </h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Instrcutions:</h4>
                    <p>{instructions}</p>
                </div>
            </div>
        );
    }
}

export default Recipe;