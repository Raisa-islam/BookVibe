import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredAddBookOtpion} from "../../utility/localstorage";
import BookCard from "./BookCard";

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
            <ul>
                {
                    Rbook.map(book => (
                    <BookCard key={book.bookId} book={book}></BookCard>
                ))}
            </ul>
        </div>
    );
};

export default ReadList;
