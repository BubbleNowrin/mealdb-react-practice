import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {

    const [meals, setMeals] = useState([]);
    // console.log(meals);
    const [cart, setCart] = useState([]);
    const addToCart = (Meal) => {
        // console.log(Meal);
        const newCart = [...cart, Meal];
        // console.log(newCart);
        setCart(newCart);
    }

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    return (
        <div className='container'>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal addToCart={addToCart} key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Meals;