// import React , { useState, useEffect } from "react";

// const YOUR_APP_ID = "7e78e4ec";
// const YOUR_APP_KEY = "ba575320b9f8f6fdf6b4d3e22891212b";

// function   Recipies() {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//       fetch('https://api.edamam.com/api/recipes/v2?type=public&q=Potato&app_id=7e78e4ec&app_key=ba575320b9f8f6fdf6b4d3e22891212b')
//         .then(response => response.json())
//         .then(data => setRecipes(data.hits))
//         .catch(error => console.error(error));
//     }, []);
//     console.log(recipes);
//   return (
    
//     <h1>qq</h1>
//   )
// }

// export default Recipies


import React from "react";


const Recipe = ({ index, title, calories, image, ingredients }) => {
  return (
    <div key={index} >
      <p>{title}</p>
      <p>{calories}</p>
      <img src={image} alt='' />
      <ol >
        {ingredients.map((ingredient ,index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;