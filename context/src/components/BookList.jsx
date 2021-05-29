import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

// class BookList extends Component  {
//     static contextType = ThemeContext;
//     render(){
//         const {isLightTheme , light ,dark}= this.context;
//         const theme = isLightTheme ? light :dark;
//         return (
//         <div style={{background:theme.bg ,color:theme.syntax}}>
//             BookList
//         </div>
//     )
//     }
// }

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div style={{ background: theme.bg, color: theme.syntax }}>
      <ul> 
        {books.map((book) => {
         return <li key={book.id}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};
export default BookList;
