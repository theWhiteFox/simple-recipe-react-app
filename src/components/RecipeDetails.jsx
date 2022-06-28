import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton"

const RecipeDetails = () => {
  const { MealId } = useParams();
  const [url] = useState(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`
  );
  const [item, setItem] = useState();

  useEffect(
    (MealId) => {
      if (MealId !== " ") {
        fetch(url)
          .then((response) => response.json())
          .then((data) => setItem(data.meals[0]))
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
      {!item ? (
        ""
      ) : (
        <>
          <div className="content">
            <BackButton/>
            <img src={item.strMealThumb} alt="" />
            <div className="inner-content">
              <h1>{item.strMeal}</h1>
              <p>
                {item.strArea} {item.strCategory}
              </p>
            </div>
          </div>
          <div className="recipe-details">
            <div className="ingredients">
              <ul>
              <h2>Ingredients</h2>
                <li>
                  {item.strIngredient1}: {item.strMeasure1}
                </li>
                <li>
                  {item.strIngredient2}: {item.strMeasure2}
                </li>
                <li>
                  {item.strIngredient3}: {item.strMeasure3}
                </li>
                <li>
                  {item.strIngredient4}: {item.strMeasure4}
                </li>
                <li>
                  {item.strIngredient5}: {item.strMeasure5}
                </li>
                <li>
                  {item.strIngredient6}: {item.strMeasure6}
                </li>
                <li>
                  {item.strIngredient7}: {item.strMeasure7}
                </li>
                <li>
                  {item.strIngredient8}: {item.strMeasure8}
                </li>
              </ul>
            </div>
            <div className="instructions">
              <h2>Instructions</h2>
              <p>{item.strInstructions}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RecipeDetails;
