import React from 'react'
import  { Link } from 'react-router-dom'

function Navbar(props) {
    const [mealType, setMealType] = React.useState('breakfast')
    const [search, setSearch] = React.useState('')
    const [query, setQuery] = React.useState('')
    
    const updateMealType = (e) =>{
        setMealType(e.target.value);
        props.onChange(search , e.target.value);
    };

    const updateSearch = (e) =>{
        setSearch(e.target.value);

    };

    const updateQuery = (e) =>{
        e.preventDefault();
        setQuery(search);
        // setSearch(''); //value change later after code execution ?
        props.onSubmit(search, mealType);
          

    };

  return (
    <nav>
    <Link to="/">Home</Link>
    <Link to='/catigory'>Category</Link>
    <form onSubmit={updateQuery} component="form">
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search for Recipe"
        />
        <button type="submit"> Search</button>
        <select value={mealType} onChange={updateMealType}>
          <option value="breakfast">Breakfast</option>
          <option value="dinner">Dinner</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
        </select>
    </form>
    </nav>
  )
}

export default Navbar;
