import React, { useState, useEffect } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

const CategoryList = ({ catName }) => {
  const [categories, setCategories] = useState([]);
  const [sortState, setSortState] = useState("none");
  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (a < b ? -1 : 1) },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((CategoriesList) => {
        setCategories(CategoriesList.categories);
      });
  }, []);

  return (
    <>
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setSortState(e.target.value)}
      >
        <option value="DEFAULT" disabled>
          None
        </option>
        <option value="descending">Descending</option>
        <option value="ascending">Ascending</option>
      </select>
      {categories
        .sort(sortMethods[sortState].method)
        .map(({ strCategory, idCategory }) => {
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
