import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import RecipeId from './components/RecipeId';
import Category from './components/Category';
import SearchElement from './components/SearchElement';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:idMeal" element={<RecipeId />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/search/:searchTerm" element={<SearchElement />} />
      </Routes>

    </>
  );
}

export default App;
