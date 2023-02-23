import "./App.css";
import { Routes, Route } from "react-router-dom";
import RecipyHome from "./component/RecipyHome";
import Category from "./component/Category";
// import Navbar from "./component/Navbar";
import Breakfast from "./component/categories/Breakfast";
import Lunch from "./component/categories/Lunch";
import Dinner from "./component/categories/Dinner";
import Snack from "./component/categories/Snack";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<RecipyHome />} />
        <Route path="/catigory" element={<Category />} />
        <Route path="/catigory/breakfast" element={<Breakfast />} />
        <Route path="/catigory/dinner" element={<Dinner />} />
        <Route path="/catigory/lunch" element={<Lunch />} />
        <Route path="/catigory/snack" element={<Snack />} />
      </Routes>
    </>
  );
}

export default App;
