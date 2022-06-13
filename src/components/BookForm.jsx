import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

export default function BookForm({add, header}) {
  const [book, setBook] = useState({title: '', author: ''});

  function addNewBook(event) {
    event.preventDefault();
    const newBook = {
      ...book,
      id: Date.now(),
    };
    add(newBook);
    setBook({title: '', author: ''});
  }

  return (
    <form>
        {header ? <h1>{header}</h1> : ''}
        <MyInput
          type="text"
          placeholder="Автор"
          value={book.author}
          onChange={e => setBook({...book, author: e.target.value})}
        />
        <MyInput
          type="text"
          placeholder="Название"
          value={book.title}
          onChange={e => setBook({...book, title: e.target.value})}
        />
        <MyButton onClick={addNewBook}>Сохранить</MyButton>
      </form>
  )
}
