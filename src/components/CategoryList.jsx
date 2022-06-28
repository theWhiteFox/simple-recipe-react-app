import React, { useState, useEffect } from "react";

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
          <div
            className="numBox"
            key={idCategory}
            onClick={() => catName(strCategory)}
          >
            <ul>
              <li>{strCategory}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default CategoryList;
