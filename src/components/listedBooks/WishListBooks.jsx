import { useEffect, useState } from "react";
import { getStoredWishBookOtpion } from "../../utility/localstorage";
import { useLoaderData } from "react-router-dom";


const WishListBooks = () => {

    const [Wbook, setWbook] = useState([]);
    const books = useLoaderData();
    useEffect(() => {
        const storedBook = getStoredWishBookOtpion();
        console.log("Books from file:", books);
        console.log("IDs from local storage:", storedBook);

        if (books.length > 0) {
            const ReadBook = books.filter(book => storedBook.includes(book.bookId));
            console.log("Filtered books:", ReadBook);
            setWbook(ReadBook);
        }
    }, []);
    return (
        <div>
            <h1>Whish List</h1>
            <ul>
                {Wbook.map(book => (
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

export default WishListBooks;