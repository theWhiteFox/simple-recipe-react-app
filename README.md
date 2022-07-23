# Simple Recipe React App

[![Netlify Status](https://api.netlify.com/api/v1/badges/49b12dcd-52dd-4175-99e3-7099318e7d57/deploy-status)](https://app.netlify.com/sites/thewhitefox-simple-recipes-react/deploys)

React app built using https://themealdb.com/api.php endpoints:
- List all meals by first letter www.themealdb.com/api/json/v1/1/search.php?f=a
- Lookup full meal details by id www.themealdb.com/api/json/v1/1/lookup.php?i=52772
- List all meal categories www.themealdb.com/api/json/v1/1/categories.php
- Filter by Category www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

## Todo
- loading state spinner ✔️
- img on page cover and on all images alt names
- localization
- www.themealdb.com/api/json/v1/1/ store in a var
- each endpoint as it's own var - endpoints import
- default category 
- back button ✔️
- best practices - naming
- responsive design ✔️
- tests
- install UI framework
- install Redux
- sort categories ✔️
- responsive nav ✔️

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

[Context api vs Redux](https://www.upbeatcode.com/react/when-to-use-context-api-vs-redux/)
