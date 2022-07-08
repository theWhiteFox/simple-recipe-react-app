import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";
import CategoryList from "./CategoryList";
import LoadingSpinner from "./LoadingSpinner";

const Meal = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [mealItem, setMealItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [open, openClose] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMealItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setCategory = (category) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  };

  const searchRecipe = (evt) => {
    if (evt.key === "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  return (
    <>
      <header>
        <h1>Recipes</h1>
      </header>
      <main>
        {open ? (
          <nav>
            <button onClick={() => openClose(false)}>Close</button>
            <div className="searchBox">
              <input
                placeholder="Search"
                type="search"
                className="search-bar"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={searchRecipe}
              />
            </div>
            <h2>Categories</h2>
            <ul>
              <CategoryList catName={(category) => setCategory(category)} />
            </ul>
          </nav>
        ) : (
          <button className="btn-menu" onClick={() => openClose(true)}>
            Menu
          </button>
        )}
        <article>
          <div className="cards">
            {show ? <MealItem data={mealItem} /> : <LoadingSpinner />}
          </div>
        </article>
      </main>
    </>
  );
};

export default Meal;
