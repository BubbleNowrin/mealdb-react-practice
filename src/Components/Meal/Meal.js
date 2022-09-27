import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Meal.css';

const Meal = (props) => {
    // console.log(props.meal);
    const addToCart = props.addToCart;
    const singleMeal = props.meal;
    const { strMealThumb, strMeal, strCategory, strArea } = singleMeal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>Category: {strCategory}</p>
            <p>Area: {strArea}</p>
            <button className='btn' onClick={() => addToCart(singleMeal)}>
                <div className='btn-display'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faBowlFood}></FontAwesomeIcon>
                </div>
            </button>
        </div>
    );
};

export default Meal;