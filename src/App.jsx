import React, { useState } from 'react';
import Weather from './components/Weather';
import SearchBar from './components/SearchBar';
import "./App.css"


const App = () => {
  const [country, setCountry] = useState('Colombo');

  const handleSearch = (searchQuery) => {
    setCountry(searchQuery);
  };

  return (
    <div className='App'>
      <SearchBar onSearch={handleSearch} />
      <Weather country={country} />
    </div>
  );
};

export default App;
