import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { MealId } = useParams();
  const [url] = useState(
    `https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`
  );
  const [item, setItem] = useState();

  useEffect((MealId) => {
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
  }, [url]);
  return (
    <>
      {!item ? (
        ""
      ) : (
        <>
          <div className="content">
            <img src={item.strMealThumb} alt="" />
            <div className="inner-content">
              <h1>{item.strMeal}</h1>
              <h2>{item.strArea}</h2>
              <h3>{item.strCategory}</h3>
            </div>
          </div>
          <div className="recipe-details">
            <div className="ingredients">
              <h2>Ingredients</h2>
              <h4>
                {item.strIngredient1}: {item.strMeasure1}
              </h4>
              <h4>
                {item.strIngredient2}: {item.strMeasure2}
              </h4>
              <h4>
                {item.strIngredient3}: {item.strMeasure3}
              </h4>
              <h4>
                {item.strIngredient4}: {item.strMeasure4}
              </h4>
              <h4>
                {item.strIngredient5}: {item.strMeasure5}
              </h4>
              <h4>
                {item.strIngredient6}: {item.strMeasure6}
              </h4>
              <h4>
                {item.strIngredient7}: {item.strMeasure7}
              </h4>
              <h4>
                {item.strIngredient8}: {item.strMeasure8}
              </h4>
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
