import React from 'react';

const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="d-flex mb-4">
      <input
        type="text"
        className="form-control form-control-lg me-2"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-primary btn-lg">Search</button>
    </form>
  );
};

export default SearchBar;   