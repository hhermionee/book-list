import React from 'react';
import BookItem from './BookItem';

export default function BookList ({books, title, remove, edit, editing, save}) {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {books.map((book, index) => 
        <BookItem
          remove={remove}
          edit={edit}
          editing={editing}
          save={save}
          number = {index + 1}
          book={book}
          key={book.id}
        />
      )}
    </div>
    
  );
}