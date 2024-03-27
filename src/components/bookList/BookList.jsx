import { useEffect, useState } from 'react';
import Book from './Book';

const BookList = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
            {books.map(book => <Book key={book.id} book = {book}></Book>)}
        </div>
    );
};

export default BookList;