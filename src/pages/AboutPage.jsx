import React from "react";
import Navbar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <header>
        <h1>About this React APP</h1>
      </header>
      <main>
        <h2>Technical Test </h2>
        <p>
          Implement a simple recipe application using React consisting of three
          screens using an open API which can be found here. We are giving you
          free reign on how the UI should look, we want to see how you would
          display and design these screens.
        </p>

        <h3> Recipe categories </h3>

        <p> Displays a list of recipe categories. </p>
        <p>
          When a category is clicked it navigates to the recipe list screen.
        </p>

        <h3> Recipe list </h3>

        <p>Displays a list of recipes for the selected category.</p>
        <p>
          When a recipe is clicked it navigates to the recipe details screen.
        </p>

        <h3> Recipe details </h3>

        <p>Displays the details of the selected recipe. </p>

        <h2>General</h2>

        <h3> Endpoints used </h3>

        <p>
          <a href="https://www.themealdb.com/api/json/v1/1/categories.php">
            https://www.themealdb.com/api/json/v1/1/categories.php
          </a>
        </p>
        <p>
          <a href="https://www.themealdb.com/api/json/v1/1/filter.php?c={category}">
            https://www.themealdb.com/api/
          </a>
        </p>
        <p>
          <a href="https://www.themealdb.com/api/json/v1/1/lookup.php?i={recipe_id}">
            https://www.themealdb.com/api/
          </a>
        </p>

        <p> You are free to use any dependency you think might be useful </p>
        <p> Take into consideration mobile screens. </p>
        <p>
          Please return a zip or a link to a git repository containing all of
          your source code and documentation, please include a README file which
          describes how to build/run the project
        </p>
      </main>
    </>
  );
};

export default HomePage;
