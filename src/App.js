import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = 'f659e4a2';
  const API_KEY = '775ed1cd5fb9b8bbc7bcc5b1045858a8';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  }, [query] );

  const getRecipes = async () => {

    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY }`);

    const data = await res.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">

      <form onSubmit={getSearch} className="search-form">

        <input 
        className="search-bar" 
        type="text" 
        value={search} 
        onChange={updateSearch} 
        />

        <button className="search-button" type="submit">Search</button>
      </form>

      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients}
        />
      ))}

    </div>
  );
}

export default App;