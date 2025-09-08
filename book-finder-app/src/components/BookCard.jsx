import React from 'react';

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i 
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
    : 'https://placehold.co/128x192/E0E0E0/787878?text=No+Cover';

  const authorName = book.author_name ? book.author_name.join(', ') : 'Unknown Author';

  return (
    <div className="col">
      <div className="card h-100 shadow-sm border-0 rounded-3">
        <img src={coverUrl} className="card-img-top rounded-top" alt={`Cover for ${book.title}`} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{book.title}</h5>
          <p className="card-text text-muted">by {authorName}</p>
          <div className="mt-auto">
            {book.first_publish_year && (
              <span className="badge bg-secondary me-2">Published: {book.first_publish_year}</span>
            )}
            {book.subject && book.subject.length > 0 && (
              <span className="badge bg-info text-white">{book.subject[0]}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;