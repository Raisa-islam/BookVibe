import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredAddBookOtpion } from "../../utility/localstorage";

const ReadList = () => {
    const [Rbook, setRbook] = useState([]);
    const books = useLoaderData();
useEffect(() => {
    const storedBook = getStoredAddBookOtpion();
    console.log("Books from file:", books);
    console.log("IDs from local storage:", storedBook);

    if (books.length > 0) {
        const ReadBook = books.filter(book => storedBook.includes(book.bookId));
        console.log("Filtered books:", ReadBook);
        setRbook(ReadBook);
    }
}, []);


    return (
        <div>
            <h2>Read List{Rbook.length}</h2>
            <ul>
                {Rbook.map(book => (
                    <li key={book.id}>
                        <p>Title: {book.bookName}</p>
                        <p>Author: {book.author}</p>
                        {/* Add additional book information here */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadList;
