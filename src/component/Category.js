import React, { useState, useEffect } from "react";
import Recipies from "./Recipies";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function RecipyHome() {
  const APP_ID = "d29d40f6";
  const APP_KEY = "5b19a6bd355a2ff2a764d0059f30cf7b";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [mealTypes, setMealTypes] = useState("Breakfast");
  const navigate = useNavigate();

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(response.data.hits);
    console.log(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  };

  // const updateSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  const updateMealTypes = (e) => {
    setMealTypes(e);
    navigate(`/catigory/${e}`);
  }
  // const updateQuery = (e) => {
  //   e.preventDefault();
  //   setQuery(search);
  //   setSearch("");
  // };

  const Data = (search , mealType ) => {
    console.log(search , mealType);
    if (search === "") {
      setQuery("chicken");
    }else{
    setQuery(search);
    }
    setMealTypes(mealType);
    updateMealTypes(mealType);
  }
  
  return (
    <div>
      <Navbar onChange={ Data }/>
      {recipes.map((recipe, index) => (
        <Recipies
          index={index}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default RecipyHome;
