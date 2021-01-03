import './App.css';
import React from 'react';

const App = () => {

  const APP_ID = 'f659e4a2';
  const API_KEY = '775ed1cd5fb9b8bbc7bcc5b1045858a8';
  const API_REQ = 'https://api.edamam.com/search?q=chicken&app_id=${' + APP_ID + '}&app_key=${' + API_KEY + '}';

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
