import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { books } from './Data'

const Book = () => {
    

  return (
    <div>
        <h2>Here are the books</h2>
        <ul>
            {books.map((book) => {
                return <li key={book.id}>
                    <Link to={`/books/${book.id}`}>{book.name}</Link>
                </li>
            })}
        </ul>

        <Outlet />
    </div>
  )
}

export default Book;