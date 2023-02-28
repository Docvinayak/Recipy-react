import React, { useState, useEffect } from "react";
import Recipies from "../component/Recipies";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Getcategory from "../component/Getcategory";


function RecipyHome({handleAddProduct}) {
  const APP_ID = "d29d40f6";
  const APP_KEY = "5b19a6bd355a2ff2a764d0059f30cf7b";
  const [recipes, setRecipes] = useState([]);
  // const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [mealTypes, setMealTypes] = useState(null);
  const catigorytypes=["Biscuits and cookies","Bread","Cereals","Condiments and sauces","Desserts","Main course","Pancake","Preps","Salad"]
  // const navigate = useNavigate();

  useEffect(() => {
    getRecipe();
  }, [query,mealTypes]);

  const getRecipe = async () => {
    if(mealTypes===null){
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
      console.log(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    }else{
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&dishType=${mealTypes.split(' ').join('%20')}`
    );
    setRecipes(response.data.hits);
    console.log(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&dishType=${mealTypes.split(' ').join('%20')}`);
    }
  };

  // const updateSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  const updateMealTypes = (e) => {
    setMealTypes(e);
    console.log(e);
    // navigate(`/catigory/${e}`);
  }
  // const updateQuery = (e) => {
  //   e.preventDefault();
  //   setQuery(search);
  //   setSearch("");
  // };

  const Data = (search) => {
    console.log(search);
    if (search === "") {
      setQuery("chicken");
    }else{
    setQuery(search);
    }
  }
  
  return (
    <div className="category">
      <Navbar onSubmit={Data} />
      <div className="wrap">
        <div className="filter">
          <Getcategory />
          {catigorytypes.map((category) =>(
            <>
            <button onClick={() => updateMealTypes(category)}>{category}</button><br/>
            </>
          ))}
        </div>
        {mealTypes ?
        <div className="products">
        {recipes.map((recipe, index) => (
          <Recipies
            index={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            handleAddProduct={handleAddProduct}
          />
        ))}
        </div>
        :
        <div className="products">
        {recipes.map((recipe, index) => (
          <Recipies
            index={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            handleAddProduct={handleAddProduct}
          />
        ))}
        </div>}
      </div>
    </div>
  );
}

export default RecipyHome;
