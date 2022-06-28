import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";
import CategoryList from "./CategoryList";
import LoadingSpinner from "./LoadingSpinner";

// loading state spinner
// img on page cover and on all images alt names
// locaization
// www.themealdb.com/api/json/v1/1/ store in a var
// each endpoint as it's own var - endpoints import
// default category
// back button
// catEnpoint naming
// responsive design
// tests


const Meal = () => {
  const [url, setUrl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setCategory = (category) => {
    setUrl(`https:/www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  };

  const searchRecipe = (evt) => {
    if (evt.key === "Enter") {
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  return (
    <>
      <header>
        <h1>Search Recipe</h1>
      </header>
      <main>
        <nav>
          <div className="searchBox">
            <input
              type="search"
              className="search-bar"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchRecipe}
            />
          </div>
          <h1>Category</h1>
          <CategoryList catName={(category) => setCategory(category)} />
        </nav>
        <article>
          <div className="cards">

            {show ? <MealItem data={item} /> : <LoadingSpinner />}
          </div>
        </article>
      </main>
    </>
  );
};

export default Meal;
