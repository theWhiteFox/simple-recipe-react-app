import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

const CategoryList = ({ catName }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((CategoriesList) => {
        setCategories(CategoriesList.categories);
      });
  }, []);

  return (
    <>
      {categories.map(({ strCategory, idCategory }) => {
        return (
          <li key={idCategory} onClick={() => catName(strCategory)}>
            {strCategory}
          </li>
        );
      })}
    </>
  );
};

export default CategoryList;
