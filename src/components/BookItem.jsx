import React from 'react';
import BookForm from './BookForm';
import MyButton from './UI/button/MyButton';

export default function BookItem (props) {
  return (
    <div className = "book">
      <div className = "book__content">
        <p className = "book__number">{props.number}.</p>
          {props.editing === props.book.id
              ? 
              <BookForm add={props.save}/>
              :
              <div className = "book__info">
                <div className = "book__author">{props.book.author}</div>
                <div className = "book__title">{props.book.title}</div>
              </div>          
          }
      </div>
      <div className = "book__btns">
        <MyButton className = "book__btn" onClick={() => props.remove(props.book)}>Удалить</MyButton>
        <MyButton className = "book__btn" onClick={() => props.edit(props.book)}>Редактировать</MyButton>
      </div>
    </div>
  )
}