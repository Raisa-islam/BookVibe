import { useEffect, useState } from "react";
import { getStoredWishBookOtpion } from "../../utility/localstorage";
import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";


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
            <ul>
                {Wbook.map(book => (
                   <BookCard key={book.bookId} book={book}></BookCard>
                ))}
            </ul>
        </div>
    );
};

export default WishListBooks;