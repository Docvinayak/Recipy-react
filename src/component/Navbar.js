import React from 'react'
import  { Link } from 'react-router-dom'
import SearchHistory from './searchhistory/Searchhistory';

function Navbar(props) {
    // const [mealType, setMealType] = React.useState('breakfast')
    const [search, setSearch] = React.useState('')
    const [query, setQuery] = React.useState('')
    const [history, setHistory] = React.useState([]);
    
    // const updateMealType = (e) =>{
    //     setMealType(e.target.value);
    //     props.onChange(search , e.target.value);
    // };

    const updateSearch = (e) =>{
        setSearch(e.target.value);
    };

    const updateQuery = (e) =>{
        console.log('onupdate',search);
        e.preventDefault();
        setQuery(search);
        
        setSearch(''); //value change later after code execution ?
        props.onSubmit(search);
        if (!history.includes(search)){
          setHistory([...history, search]);
          }
          
    };

    function handleSearch(term) {
      // add the search term to the history array
      console.log('data',search);
      props.onSubmit(term);
      setSearch('');
      // perform the search using the term
      // ...
    }


  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/category">Category</Link>
      <Link to="/cart">Wishlist</Link>
      {/* <Link to='/searchhistory'>Search History</Link> */}
      <form onSubmit={updateQuery} component="form">
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search for Recipe"
          className="search-input"
        />
        <button type="submit"> Search</button>
        <SearchHistory history={history} onClick={handleSearch} />
        {/* <select value={mealType} onChange={updateMealType}>
          <option value="breakfast">Breakfast</option>
          <option value="dinner">Dinner</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
        </select> */}
      </form>
    </nav>
  );
}

export default Navbar;
