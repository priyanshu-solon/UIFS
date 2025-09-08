import { useState } from 'react';

export const useBookSearch = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBooks = async (query) => {
    if (!query.trim()) {
      setBooks([]);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data.');
      }
      const data = await response.json();
      setBooks(data.docs || []);
    } catch (err) {
      console.error(err);
      setError('Could not retrieve books. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return { books, loading, error, searchBooks };
};