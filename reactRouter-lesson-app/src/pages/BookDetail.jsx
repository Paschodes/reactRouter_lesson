import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { books } from './Data';

const BookDetail = () => {
    const [book, setBook] = useState('');

    const {id} = useParams();

    useEffect(() => {
      const book = books.find(book => book.id == id)
      if (book) {
        setBook(book)
      }
    }, [id])

    // const getBookName = () => {
    //   console.log(id)
    //   console.log(books)

    //   const book = books.find(book => id == book.id)
    //   console.log(book)
    //   if (book) {
    //     return book.name;
    //   }
    //   return ''
    // }

  return (
    <div>
        <h3>BookDetail</h3>

        <h2>Book ID is {book.name}</h2>
        {/* <h2>Book ID is {getBookName()}</h2> */}
    </div>
  )
}

export default BookDetail;