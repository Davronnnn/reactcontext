import React, { createContext, useState } from 'react';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title :' name of king', id:1}, 
        {title :' name of king2', id:2},
        {title :' name of king3', id:3},
        {title :' name of king4', id:4},

    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
