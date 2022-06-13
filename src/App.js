import React, { useState, useEffect } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './styles/App.css';


export default function App() {
  const initialState = JSON.parse(localStorage.getItem('books'))
    ? JSON.parse(localStorage.getItem('books'))
    : [];
  const [books, setBooks] = useState(initialState);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, book]);
  }

  const removeBook = (book) => {
    setBooks(books.filter(b => b.id !== book.id));
  }

  const changeBook = (book) => {
    setEditing(book.id);
  }

  const saveBook = (book) => {
    setBooks(books.map(b => {
      if (b.id === editing) {
        b.author = book.author;
        b.title = book.title;
      }
      return b;
    }));
    setEditing(null);
  }

  return (
    <div className="App">
      <BookForm add={addBook} header="Добавить книгу"/>
      <BookList 
        remove={removeBook}
        edit={changeBook}
        editing={editing}
        save={saveBook}
        books={books}
        title="Список книг"
      />
      {books.length === 0 ? <div>Добавьте первую книгу :)</div> : ''}
    </div>
  );
}
