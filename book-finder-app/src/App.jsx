import React, { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import BookCard from './components/BookCard.jsx';
import { useBookSearch } from './hooks/useBookSearch.js';

const App = () => {
  const [query, setQuery] = useState('');
  const { books, loading, error, searchBooks } = useBookSearch();

  const handleSearch = (e) => {
    e.preventDefault();
    searchBooks(query);
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-4 fw-bold text-primary">Book Finder</h1>
        <p className="lead text-secondary">Search for your next great read!</p>
      </div>

      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />

      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2 text-muted">Finding books...</p>
        </div>
      )}
      {error && (
        <div className="alert alert-danger text-center my-4" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && books.length > 0 && (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-4">
          {books.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      )}

      {!loading && !error && books.length === 0 && query.trim() && (
        <div className="alert alert-info text-center my-4" role="alert">
          No books found for your search. Try a different query!
        </div>
      )}
    </div>
  );
};

export default App;