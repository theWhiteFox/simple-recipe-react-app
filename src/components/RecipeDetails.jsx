import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";

const RecipeDetails = () => {
  const { MealId } = useParams();
  const [url] = useState(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`
  );
  const [mealItem, setMealItem] = useState();

  useEffect(
    (MealId) => {
      if (MealId !== " ") {
        fetch(url)
          .then((response) => response.json())
          .then((data) => setMealItem(data.meals[0]))
          .catch((error) => {
            console.error(
              "There has been a problem with your fetch operation:",
              error
            );
          });
      }
    },
    [url]
  );
  return (
    <>
      {!mealItem ? (
        ""
      ) : (
        <>
          <div className="content">
  
            <BackButton />
            <img src={mealItem.strMealThumb} alt="" />
            <div className="inner-content">
              <h1>{mealItem.strMeal}</h1>
              <p>
                {mealItem.strArea} {mealItem.strCategory}
              </p>
            </div>
          </div>
          <div className="recipe-details">
            <div className="ingredients">
              <ul>
                <h2>Ingredients</h2>
                <li>
                  {mealItem.strIngredient1}: {mealItem.strMeasure1}
                </li>
                <li>
                  {mealItem.strIngredient2}: {mealItem.strMeasure2}
                </li>
                <li>
                  {mealItem.strIngredient3}: {mealItem.strMeasure3}
                </li>
                <li>
                  {mealItem.strIngredient4}: {mealItem.strMeasure4}
                </li>
                <li>
                  {mealItem.strIngredient5}: {mealItem.strMeasure5}
                </li>
                <li>
                  {mealItem.strIngredient6}: {mealItem.strMeasure6}
                </li>
                <li>
                  {mealItem.strIngredient7}: {mealItem.strMeasure7}
                </li>
                <li>
                  {mealItem.strIngredient8}: {mealItem.strMeasure8}
                </li>
              </ul>
            </div>
            <div className="instructions">
              <h2>Instructions</h2>
              <p>{mealItem.strInstructions}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RecipeDetails;
