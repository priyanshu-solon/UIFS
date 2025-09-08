import React, { useState } from 'react';
import './App.scss';

// The main application component for the Recipe Finder.
const App = () => {
  // State variables for the search query, the list of meals, loading status, and errors.
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Asynchronous function to fetch recipes from TheMealDB API based on an ingredient.
  const fetchRecipes = async (ingredient) => {
    // Clear previous search results if the query is empty.
    if (!ingredient.trim()) {
      setMeals([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`);
      
      // Check if the network request was successful.
      if (!response.ok) {
        throw new Error('Failed to fetch recipes.');
      }
      
      const data = await response.json();
      // Update the meals state with the fetched data. Use an empty array if no meals are found.
      setMeals(data.meals || []);
    } catch (err) {
      console.error(err);
      setError('Could not retrieve recipes. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Handler for the form submission. Prevents page reload and initiates the search.
  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(query);
  };

  // A functional component to display a single recipe card.
  const RecipeCard = ({ meal }) => (
    <div className="col">
      <div className="card h-100 shadow-lg border-0 recipe-card">
        <img src={meal.strMealThumb} className="card-img-top" alt={`Recipe for ${meal.strMeal}`} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{meal.strMeal}</h5>
        </div>
      </div>
    </div>
  );

  return (
    // Main container using Bootstrap classes for layout and styling.
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light py-5">
      <div className="container">
      {/* Application header */}
      <div className="text-center mb-4">
        <h1 className="display-4 fw-bold text-dark">Recipe Ideas</h1>
        <p className="lead text-secondary">Find recipes based on ingredients you have!</p>
      </div>

      {/* Search form component */}
      <form onSubmit={handleSearch} className="d-flex mb-4">
        <input
          type="text"
          className="form-control form-control-lg me-2"
          placeholder="e.g., chicken, cheese, potatoes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-lg">Search</button>
      </form>

      {/* Conditional rendering of content based on application state */}

      {/* Display a loading spinner while fetching data. */}
      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2 text-muted">Finding recipes...</p>
        </div>
      )}

      {/* Display an alert for any errors. */}
      {error && (
        <div className="alert alert-danger text-center my-4" role="alert">
          {error}
        </div>
      )}

      {/* Display the grid of recipe cards if search is successful. */}
      {!loading && !error && meals.length > 0 && (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-4">
          {meals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}

      {/* Display a message when no recipes are found. */}
      {!loading && !error && meals.length === 0 && query.trim() && (
        <div className="alert alert-info text-center my-4" role="alert">
          No recipes found for your ingredients. Try a different query!
        </div>
      )}
    </div>
    </div>
  );
};

export default App;