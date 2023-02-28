import "./App.css";
import { Routes, Route } from "react-router-dom";
import RecipyHome from "./Homepage/RecipyHome";
import Category from "./category/Category";
import Cart from "./cart/Cart";
// import Navbar from "./component/Navbar";
import Breakfast from "./component/categories/Breakfast";
import Lunch from "./component/categories/Lunch";
import Dinner from "./component/categories/Dinner";
import Snack from "./component/categories/Snack";
import Internalpage from "./component/internalpage/Internalpage";
import SearchHistory from "./component/searchhistory/Searchhistory";
import { useState } from "react";


function App() {
  const [cartitem,setCartitem] = useState([]);

  const handleAddProduct = (item) => {
    
    console.log(item.title);
    const ProductExist =cartitem.find((product)=>product.title === item.title);
    if (ProductExist) {
      console.log("old");
      setCartitem (
        cartitem.filter((product) =>
          product.title !== item.title
            // ?{...ProductExist, quantity : ProductExist.quantity + 1}
            // : product
        )
      );
    } else {
      console.log("new");
      console.log({ ...item, quantity: 1 });
      setCartitem ([...cartitem, { ...item, quantity: 1 }]);
    }
    console.log(cartitem);
  }

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<RecipyHome handleAddProduct={handleAddProduct}/>} />
        <Route path="/category" element={<Category handleAddProduct={handleAddProduct}/>}>
          <Route path="breakfast" element={<Breakfast />} />
          <Route path="dinner" element={<Dinner />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="snack" element={<Snack />} />
        </Route>
        <Route path="/cart" element={<Cart cartitem={cartitem} handleAddProduct={handleAddProduct}/>} />
        <Route path="/internalpage/:title" element={<Internalpage />} />
        <Route path="category/internalpage/:title" element={<Internalpage />} />
        <Route path="/searchhistory" element={<SearchHistory />} />
        <Route path='*' element={<h1>404 No Page Found Unicorn</h1>} />
        
      </Routes>
    </>
  );
}

export default App;
