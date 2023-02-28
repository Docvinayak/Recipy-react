import React from 'react';
import Recipies from "../component/Recipies";

const Cart = ({cartitem ,handleAddProduct}) => {
  return (
    <div>
      {cartitem.map((recipe, index) => (
        <Recipies
          key={index}
          title={recipe.title}
          calories={recipe.calories}
          image={recipe.image}
          ingredients={recipe.ingredients}
          handleAddProduct={handleAddProduct}
          incart={true}
        />
      ))}
    </div>
  );
}

export default Cart