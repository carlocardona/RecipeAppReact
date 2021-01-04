import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ title,calories,image,ingredients }) => {

    return (
        <div className={style.recipe}>
        <h3>{title}</h3>
        <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <p>{calories}</p>
        <img src={image} alt=""/>

        </div>
    );
}

export default Recipe;
